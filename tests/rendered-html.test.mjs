import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  publishedCities,
  qualityGate,
  similarity,
} from "../data/florida-cities.js";
import { statePageContent } from "../data/florida-data.js";

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
  assert.match(html, /A simpler way to plan a safer home/);
  assert.match(html, /Understand the cost before you begin/);
  assert.match(html, /Financial assistance may be available/);
  assert.match(html, /href="\/lead-form\/\?source=home&amp;page_type=home"/);
  assert.doesNotMatch(html, /Make decisions in the right order/);
  assert.doesNotMatch(html, /Useful answers without invented certainty/);
  assert.match(html, /rel="preconnect" href="https:\/\/fonts.gstatic.com"/);
  assert.match(html, /fonts.googleapis.com\/css2\?family=Source\+Serif\+4/);
  assert.match(html, /class="[^"]*\bbtn\b[^"]*\bbtn--cta\b/);
  assert.match(html, /class="[^"]*\bwrap-wide\b/);
  assert.match(html, /<main id="main-content">/);
  assert.match(html, /type="application\/ld\+json"/);
  assert.match(html, /Organization/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|LocalBusiness/);
});

test("renders the complete supplied Florida state-page content", async () => {
  const response = await render("/tub-to-shower-conversion/florida/");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, new RegExp(statePageContent.contractorHeading));
  assert.match(html, /Finding the right professional is our job, not yours/);
  assert.match(html, /Conversion types for Florida bathrooms/);
  assert.match(html, /The conversion process, start to finish/);
  assert.match(html, /Florida city guides/);
  assert.match(html, /RELATED GUIDES|Related guides/i);
  assert.match(html, /Explore Tub-to-Shower Conversion Options in Florida/);
  assert.equal((html.match(/class="faq"/g) ?? []).length, 12);
  assert.doesNotMatch(html, /old defensive contractor wording/i);
});

test("server-renders the supplied lead form and keeps it out of search results", async () => {
  const response = await render(
    "/lead-form/?zip=33602&project=tub-to-shower%20conversion&source=test",
  );
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /What project are you considering\?/);
  assert.match(html, /Tub-to-shower conversion/);
  assert.match(html, /value="33602"/);
  assert.match(html, /name="robots" content="noindex, follow"/);
  assert.match(html, /rel="canonical" href="https:\/\/agingathomeadvisor.com\/lead-form\/"/);
});

test("renders guide and service copy from the supplied references", async () => {
  const [guidesResponse, serviceResponse] = await Promise.all([
    render("/guides/"),
    render("/walk-in-showers/"),
  ]);
  assert.equal(guidesResponse.status, 200);
  assert.equal(serviceResponse.status, 200);

  const guidesHtml = await guidesResponse.text();
  const serviceHtml = await serviceResponse.text();
  assert.match(
    guidesHtml,
    /Practical, plain-language answers about costs, comparisons, coverage, and safety/,
  );
  assert.match(guidesHtml, /Done reading and ready to plan\?/);
  assert.match(serviceHtml, /Walk-In Showers/);
  assert.doesNotMatch(serviceHtml, /Source-led editorial process|At a glance|Use trustworthy information/);
  assert.match(serviceHtml, /Free and no obligation/);
});

test("keeps the supplied production design system byte-for-byte", async () => {
  const css = await readFile(
    new URL("../app/design-system.css", import.meta.url),
    "utf8",
  );
  const hash = createHash("sha256").update(css).digest("hex");
  assert.equal(
    hash,
    "c6c8feca0547bf195e658232b49c5f4b07cda06b28c6ccb1b3739adc998ebaac",
  );
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
  assert.match(html, /class="faq"/);
  assert.match(html, /class="[^"]*\bsidebar--wide\b/);
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
