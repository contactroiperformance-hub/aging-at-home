import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir, stat } from "node:fs/promises";
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

test("ships the supplied crawl files verbatim", async () => {
  const [robots, sitemap] = await Promise.all([
    readFile(new URL("../public/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8"),
  ]);

  assert.match(robots, /Sitemap: https:\/\/agingathomeadvisor.com\/sitemap.xml/);
  assert.match(sitemap, /service-city-pages.xml/);
  assert.doesNotMatch(robots, /Disallow:\s*\//);
});

test("keeps every supplied page byte-for-byte through the build", async () => {
  const manifest = await readFile(
    new URL("./static-export-html.sha256", import.meta.url),
    "utf8",
  );
  const entries = manifest.trim().split("\n").map((line) => {
    const [hash, ...pathParts] = line.trim().split(/\s+/);
    return { hash, path: pathParts.join(" ") };
  });

  assert.equal(entries.length, 50);
  for (const entry of entries) {
    for (const root of ["../public/", "../dist/client/"]) {
      const body = await readFile(new URL(`${root}${entry.path}`, import.meta.url));
      const hash = createHash("sha256").update(body).digest("hex");
      assert.equal(hash, entry.hash, `${root}${entry.path}`);
    }
  }
});

test("ships the supplied mobile layer on all 50 pages", async () => {
  const manifest = await readFile(
    new URL("./static-export-html.sha256", import.meta.url),
    "utf8",
  );
  const paths = manifest.trim().split("\n").map((line) =>
    line.trim().split(/\s+/).slice(1).join(" "),
  );

  for (const path of paths) {
    const pageUrl = new URL(`../public/${path}`, import.meta.url);
    const html = await readFile(pageUrl, "utf8");
    const links = [...html.matchAll(
      /<link rel="stylesheet" href="([^"]*css\/mobile\.css)"[^>]*>/g,
    )];
    assert.equal(links.length, 2, path);
    const asyncLink = links.filter((link) => /media="print"/.test(link[0]));
    assert.equal(asyncLink.length, 1, path);
    const css = await readFile(new URL(asyncLink[0][1], pageUrl), "utf8");
    assert.match(css, /@media \(max-width:920px\)/);
    assert.match(css, /@media \(max-width:1120px\)/);
    assert.match(css, /\.aaha-burger/);
    assert.match(css, /\.aaha-nav-extra/);
    assert.match(css, /\.aaha-side-hide/);
    assert.match(css, /\.aaha-mobile-cta/);
    assert.match(css, /main \[style\*="position:sticky"\]\{position:static/);
  }

  const siteScript = await readFile(
    new URL("../public/js/site.js", import.meta.url),
    "utf8",
  );
  assert.match(siteScript, /mobile: hamburger menu/);
  assert.match(siteScript, /mobile: sticky CTA button/);
  assert.match(siteScript, /phone \+ CTA move into the mobile menu/);
  assert.match(siteScript, /hide guide sidebars \(TOC \+ CTA card\)/);
  assert.match(siteScript, /hiddenSidebars > 0/);
});

test("ships responsive images, local fonts, and a stable critical path", async () => {
  const manifest = await readFile(
    new URL("./static-export-html.sha256", import.meta.url),
    "utf8",
  );
  const paths = manifest.trim().split("\n").map((line) =>
    line.trim().split(/\s+/).slice(1).join(" "),
  );
  let imageCount = 0;

  for (const path of paths) {
    const html = await readFile(
      new URL(`../public/${path}`, import.meta.url),
      "utf8",
    );
    assert.match(html, /data-performance-fonts/);
    assert.match(html, /source-sans-3-latin\.woff2/);
    assert.match(html, /source-serif-4-latin\.woff2/);
    assert.doesNotMatch(html, /fonts\.googleapis\.com/);
    assert.match(html, /data-inline-mobile/);

    const images = [...html.matchAll(/<img\b[^>]*>/g)];
    imageCount += images.length;
    for (const image of images) {
      assert.match(image[0], /\bwidth="\d+"/, `${path}: image width`);
      assert.match(image[0], /\bheight="\d+"/, `${path}: image height`);
      const inlineStyle = image[0].match(/\bstyle="([^"]*)"/)?.[1] ?? "";
      assert.match(
        inlineStyle,
        /(?:^|;)\s*height\s*:/,
        `${path}: CSS-controlled image height`,
      );
    }
    assert.equal(
      (html.match(/data-responsive-image=/g) ?? []).length,
      images.length,
      `${path}: responsive image wrappers`,
    );
  }

  assert.equal(imageCount, 27);
  const imageFiles = await readdir(new URL("../public/images/", import.meta.url));
  const webpFiles = imageFiles.filter((file) => file.endsWith(".webp"));
  assert.equal(webpFiles.length, 78);
  const totalWebpBytes = (
    await Promise.all(
      webpFiles.map(async (file) =>
        (await stat(new URL(`../public/images/${file}`, import.meta.url))).size
      ),
    )
  ).reduce((total, size) => total + size, 0);
  assert.ok(totalWebpBytes < 2_500_000, `WebP payload: ${totalWebpBytes}`);

  const siteScript = await readFile(
    new URL("../public/js/site.js", import.meta.url),
    "utf8",
  );
  assert.match(siteScript, /ResizeObserver/);
  assert.doesNotMatch(siteScript, /offsetHeight/);
  assert.match(siteScript, /setTimeout\(loadAnalytics, 8000\)/);
});

test("ships the supplied streamlined form disclosure", async () => {
  const html = await readFile(
    new URL("../public/get-started/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /<details[^>]*><summary[^>]*>How we use and share your information<\/summary>/);
  assert.match(html, /Notice at Collection/);
  assert.match(html, /Your Privacy Choices/);
  assert.doesNotMatch(html, /This permission does not authorize prerecorded or artificial-voice calls/);
  assert.doesNotMatch(html, /Consent records \(wording, version, timestamp/);
});

test("preserves technical SEO and local GEO signals across the static export", async () => {
  const manifest = await readFile(
    new URL("./static-export-html.sha256", import.meta.url),
    "utf8",
  );
  const paths = manifest.trim().split("\n").map((line) =>
    line.trim().split(/\s+/).slice(1).join(" "),
  );
  const sitemap = (
    await Promise.all(
      [
        "core-pages.xml",
        "guides.xml",
        "service-state-pages.xml",
        "service-city-pages.xml",
      ].map((file) =>
        readFile(new URL(`../public/sitemaps/${file}`, import.meta.url), "utf8"),
      ),
    )
  ).join("\n");
  const titles = new Set();
  const descriptions = new Set();
  let indexableCount = 0;
  let cityCount = 0;

  for (const path of paths) {
    const html = await readFile(
      new URL(`../public/${path}`, import.meta.url),
      "utf8",
    );
    const route = path === "index.html"
      ? "/"
      : `/${path.replace(/index\.html$/, "")}`;
    const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1] ?? "";

    assert.match(html, /<html lang="en">/, path);
    assert.match(
      html,
      /<meta name="viewport" content="width=device-width, initial-scale=1">/,
      path,
    );
    assert.match(robots, /(?:index|noindex), follow/, path);

    for (const image of html.matchAll(/<img\b([^>]*)>/g)) {
      assert.match(image[1], /\balt="[^"]+"/, `${path}: image alt`);
    }

    if (robots.includes("noindex")) continue;
    indexableCount += 1;

    const title = html.match(/<title>([^<]+)<\/title>/)?.[1] ?? "";
    const description = html.match(
      /<meta name="description" content="([^"]+)"/,
    )?.[1] ?? "";
    const expectedCanonical = `https://agingathomeadvisor.com${route}`;

    assert.ok(title.length >= 20, `${path}: title`);
    assert.ok(description.length >= 70, `${path}: description`);
    assert.match(
      html,
      new RegExp(
        `<link rel="canonical" href="${expectedCanonical.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}">`,
      ),
      `${path}: canonical`,
    );
    assert.ok(sitemap.includes(`<loc>${expectedCanonical}</loc>`), `${path}: sitemap`);
    assert.equal((html.match(/<h1(?:\s[^>]*)?>/g) ?? []).length, 1, `${path}: h1`);
    assert.ok(!titles.has(title), `${path}: duplicate title`);
    assert.ok(!descriptions.has(description), `${path}: duplicate description`);
    titles.add(title);
    descriptions.add(description);

    if (
      path.startsWith("tub-to-shower-conversion/florida/") &&
      path !== "tub-to-shower-conversion/florida/index.html"
    ) {
      cityCount += 1;
      assert.match(html, /type="application\/ld\+json"/, path);
      assert.match(html, /"@type":"WebPage"/, path);
      assert.match(html, /BreadcrumbList/, path);
      assert.match(html, /https:\/\/data\.census\.gov\//, path);
      assert.match(html, /Checked July 2026/, path);
    }

    if (path.startsWith("guides/") && path !== "guides/index.html") {
      assert.match(html, /id="sources"/, `${path}: sources`);
    }
  }

  assert.equal(indexableCount, 49);
  assert.equal(cityCount, 17);
});

test("configures the supplied Google tag through the privacy-aware loader", async () => {
  const siteScript = await readFile(
    new URL("../public/js/site.js", import.meta.url),
    "utf8",
  );
  assert.match(siteScript, /var GA4_ID = 'G-QBMDHKNH6S';/);
  assert.match(siteScript, /googletagmanager\.com\/gtag\/js\?id=' \+ GA4_ID/);
  assert.match(siteScript, /window\.gtag\('config', GA4_ID\)/);
  assert.match(siteScript, /if \(GA4_ID && !anOut\)/);

  const manifest = await readFile(
    new URL("./static-export-html.sha256", import.meta.url),
    "utf8",
  );
  for (const line of manifest.trim().split("\n")) {
    const path = line.trim().split(/\s+/).slice(1).join(" ");
    const html = await readFile(new URL(`../public/${path}`, import.meta.url), "utf8");
    assert.doesNotMatch(
      html,
      /googletagmanager\.com\/gtag\/js/,
      `${path}: analytics must remain opt-out gated`,
    );
  }
});

test("ships the supplied mobile lead-form auto-advance behavior", async () => {
  const leadFormScript = await readFile(
    new URL("../public/js/lead-form.js", import.meta.url),
    "utf8",
  );
  assert.match(leadFormScript, /function scrollToEl\(el\)/);
  assert.match(leadFormScript, /function nextQuestion\(fromEl\)/);
  assert.match(leadFormScript, /scrollToEl\(nextQuestion\(r\)\)/);
  assert.match(leadFormScript, /if \(state\.consent\) scrollToEl\(submitBtn\)/);
});
