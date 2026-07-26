import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  publishedCities,
  qualityGate,
  similarity,
} from "../data/florida-cities.js";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("preserves all 17 publishable Florida city records", () => {
  assert.equal(publishedCities.length, 17);
  for (const city of publishedCities) {
    const result = qualityGate(city);
    assert.equal(result.pass, true, `${city.slug}: ${result.failed.join(", ")}`);
    assert.equal(city.index_status, "index");
  }
});

test("keeps pairwise city editorial similarity below the publication threshold", () => {
  for (let i = 0; i < publishedCities.length; i += 1) {
    for (let j = i + 1; j < publishedCities.length; j += 1) {
      const overlap = similarity(publishedCities[i], publishedCities[j]);
      assert.ok(
        overlap < 0.65,
        `${publishedCities[i].slug} / ${publishedCities[j].slug}: ${overlap}`,
      );
    }
  }
});

test("server-renders a complete, canonical homepage", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Safer Bathroom Planning for Aging at Home/);
  assert.match(html, /rel="canonical" href="https:\/\/agingathomeadvisor.com\/"/);
  assert.match(html, /Make Your Home Safer for the Years Ahead/);
  assert.match(html, /<main id="main-content">/);
  assert.match(html, /type="application\/ld\+json"/);
  assert.match(html, /Organization/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|LocalBusiness/);
});

test("server-renders a data-driven city page with local sources", async () => {
  const response = await render("/tub-to-shower-conversion/florida/tampa/");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /Tub-to-Shower Conversion Options in Tampa, Florida/);
  assert.match(html, /City of Tampa Construction Services Center/);
  assert.match(html, /Hillsborough County Development Services/);
  assert.match(html, /Publication quality gate passed/);
  assert.match(
    html,
    /rel="canonical" href="https:\/\/agingathomeadvisor.com\/tub-to-shower-conversion\/florida\/tampa\/"/,
  );
  assert.match(html, /BreadcrumbList/);
  assert.doesNotMatch(html, /LocalBusiness|AggregateRating|Review"/);
});

test("ships crawl and generative-discovery files", async () => {
  const [robots, sitemap, llms] = await Promise.all([
    readFile(new URL("../public/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8"),
    readFile(new URL("../public/llms.txt", import.meta.url), "utf8"),
  ]);

  assert.match(robots, /Sitemap: https:\/\/agingathomeadvisor.com\/sitemap.xml/);
  assert.match(sitemap, /service-city-pages.xml/);
  assert.match(llms, /Editorial conventions/);
  assert.doesNotMatch(robots, /Disallow:\s*\//);
});
