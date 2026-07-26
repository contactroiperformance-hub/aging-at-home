import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import {
  assistancePrograms,
  demographics,
  licenseGuidance,
  officialSources,
  statePage,
} from "@/data/florida-data.js";
import {
  cities as importedCities,
  publishedCities as importedPublishedCities,
  qualityGate,
} from "@/data/florida-cities.js";
import { ArticlePage, ReferencePage } from "../components/ArticlePage";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { PrivacyChoices } from "../components/PrivacyChoices";
import { StructuredData } from "../components/StructuredData";
import { ZipCheck } from "../components/ZipCheck";
import { referencePages } from "../content/reference-pages";

type City = {
  slug: string;
  name: string;
  county: string;
  region: string;
  seo_title: string;
  meta_description: string;
  h1: string;
  intro: string[];
  facts: { label: string; value: string; note: string }[];
  permit: {
    authority: string;
    url: string;
    county_authority: string;
    county_url: string;
    note: string;
  };
  considerations: { h: string; d: string }[];
  resources: { name: string; d: string; url: string }[];
  faqs: { q: string; a: string; links?: { label: string; href: string }[] }[];
  summary: string;
  cta: string;
  sources: { agency: string; title: string; url: string; supports: string }[];
  nearby: { name: string; href: string }[];
  index_status: string;
  source_last_checked: string;
};

const cities = importedCities as unknown as Record<string, City>;
const publishedCities = importedPublishedCities as unknown as City[];
const siteUrl = "https://agingathomeadvisor.com";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  const referenceRoutes = Object.keys(referencePages).map((route) => ({
    slug: route.split("/"),
  }));
  return [
    ...referenceRoutes,
    { slug: ["tub-to-shower-conversion", "florida"] },
    ...publishedCities.map((city) => ({
      slug: ["tub-to-shower-conversion", "florida", city.slug],
    })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = slug.join("/");

  if (route === "tub-to-shower-conversion/florida") {
    return {
      title: statePage.seo_title,
      description: statePage.meta_description,
      alternates: { canonical: `/${route}/` },
      robots: { index: statePage.index_status === "index", follow: true },
    };
  }

  if (slug.length === 3 && slug[0] === "tub-to-shower-conversion" && slug[1] === "florida") {
    const city = cities[slug[2]];
    if (!city) return {};
    return {
      title: city.seo_title,
      description: city.meta_description,
      alternates: { canonical: `/${route}/` },
      robots: { index: city.index_status === "index", follow: true },
    };
  }

  const page = referencePages[route as keyof typeof referencePages];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${route}/` },
    robots: { index: true, follow: true },
    openGraph: {
      type: page.type === "guide" ? "article" : "website",
      title: page.title,
      description: page.description,
      url: `${siteUrl}/${route}/`,
    },
  };
}

function relatedHref(href: string) {
  const file = href.replace(/^.*\//, "").replace(/\.dc\.html$/i, "");
  const match = publishedCities.find(
    (city) =>
      file.toLowerCase().endsWith(city.name.toLowerCase().replace(/\./g, "")) ||
      file.toLowerCase().includes(city.slug.replaceAll("-", " ")),
  );
  return match
    ? `/tub-to-shower-conversion/florida/${match.slug}/`
    : "/tub-to-shower-conversion/florida/";
}

function FloridaStatePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${siteUrl}/tub-to-shower-conversion/florida/#webpage`,
          url: `${siteUrl}/tub-to-shower-conversion/florida/`,
          name: statePage.seo_title,
          description: statePage.meta_description,
          dateModified: "2026-07-26",
          about: { "@type": "Place", name: "Florida" },
          isPartOf: { "@id": `${siteUrl}/#organization` },
        }}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            {
              "@type": "ListItem",
              position: 2,
              name: "Tub-to-Shower Conversion",
              item: `${siteUrl}/tub-to-shower-conversion/`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Florida",
              item: `${siteUrl}/tub-to-shower-conversion/florida/`,
            },
          ],
        }}
      />
      <main id="main-content">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Tub-to-shower conversion", href: "/tub-to-shower-conversion/" },
              { label: "Florida" },
            ]}
          />
        </div>
        <section className="page-hero page-hero--state">
          <div className="container state-hero">
            <div>
              <p className="eyebrow">Florida planning guide · Updated July 2026</p>
              <h1>{statePage.h1}</h1>
              <p className="lede">{statePage.meta_description}</p>
              <ZipCheck label="Check local options" />
            </div>
            <div className="range-card">
              <span>National planning range</span>
              <strong>{statePage.national_cost_range.label}</strong>
              <p>
                Not a Florida quote. Local written estimates are the only real
                project price.
              </p>
              <Link href="/guides/tub-to-shower-conversion-cost/">
                Understand the cost range
              </Link>
            </div>
          </div>
        </section>

        <section className="section section--tight">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Statewide context</p>
                <h2>Florida housing and aging, by the numbers</h2>
              </div>
              <span className="source-date">{demographics.vintage}</span>
            </div>
            <div className="fact-grid">
              {demographics.metrics.map((metric) => (
                <article className="fact-card" key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.estimate}</strong>
                  <p>{metric.note}</p>
                </article>
              ))}
            </div>
            <p className="source-date">
              Source:{" "}
              <a href={demographics.source_url}>U.S. Census Bureau, American Community Survey</a>.
              Retrieved {demographics.retrieved_at}. Estimates describe the state,
              not an individual household.
            </p>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container split-section split-section--wide">
            <div>
              <p className="eyebrow">Licensing and permits</p>
              <h2>Verify the professional and the project scope</h2>
              <p>{licenseGuidance.distinction}</p>
              <p>{licenseGuidance.note}</p>
              <a
                className="button button--primary"
                href={licenseGuidance.license_search_url}
                rel="noopener noreferrer"
              >
                Search Florida DBPR licenses
              </a>
            </div>
            <div className="answer-box">
              <strong>Permits vary by address and scope</strong>
              <p>
                Plumbing, electrical, structural, or wider remodeling work may
                require permits. Confirm the authority having jurisdiction with
                the city or county and put responsibility for permits in the
                written scope.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Eligibility varies</p>
                <h2>Financial assistance programs to investigate</h2>
              </div>
              <Link href="/financial-assistance/">Read the full assistance guide</Link>
            </div>
            <div className="program-grid">
              {assistancePrograms.map((program) => (
                <article className="program-card" key={program.program}>
                  <span>{program.agency}</span>
                  <h3>{program.program}</h3>
                  <p>
                    <strong>Who it serves:</strong> {program.population}
                  </p>
                  <p>
                    <strong>Bathroom relevance:</strong> {program.relevance}
                  </p>
                  <a href={program.source} rel="noopener noreferrer">
                    Official program page
                  </a>
                </article>
              ))}
            </div>
            <p className="source-date">
              Programs determine eligibility and approval. Status and funding
              availability should be reconfirmed before work begins.
            </p>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">17 publication-ready city records</p>
                <h2>Florida city guides</h2>
              </div>
            </div>
            <div className="city-directory">
              {Object.entries(
                publishedCities.reduce<Record<string, City[]>>((groups, city) => {
                  (groups[city.region] ??= []).push(city);
                  return groups;
                }, {}),
              ).map(([region, regionCities]) => (
                <section className="city-region" key={region}>
                  <h3>{region}</h3>
                  {regionCities.map((city) => (
                    <Link
                      href={`/tub-to-shower-conversion/florida/${city.slug}/`}
                      key={city.slug}
                    >
                      {city.name} <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container sources">
            <p className="eyebrow">Authoritative references</p>
            <h2>Florida source library</h2>
            <ul>
              {officialSources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} rel="noopener noreferrer">
                    {source.agency}: {source.title}
                  </a>
                  <span>{source.supports}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

function CityPage({ city }: { city: City }) {
  const gate = qualityGate(city);
  const cityUrl = `${siteUrl}/tub-to-shower-conversion/florida/${city.slug}/`;
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${cityUrl}#webpage`,
          url: cityUrl,
          name: city.seo_title,
          description: city.meta_description,
          dateModified: "2026-07-26",
          about: {
            "@type": "Place",
            name: `${city.name}, Florida`,
            containedInPlace: { "@type": "State", name: "Florida" },
          },
          isPartOf: { "@id": `${siteUrl}/#organization` },
        }}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            {
              "@type": "ListItem",
              position: 2,
              name: "Tub-to-Shower Conversion",
              item: `${siteUrl}/tub-to-shower-conversion/`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Florida",
              item: `${siteUrl}/tub-to-shower-conversion/florida/`,
            },
            { "@type": "ListItem", position: 4, name: city.name, item: cityUrl },
          ],
        }}
      />
      <main id="main-content">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Tub-to-shower conversion", href: "/tub-to-shower-conversion/" },
              { label: "Florida", href: "/tub-to-shower-conversion/florida/" },
              { label: city.name },
            ]}
          />
        </div>
        <section className="city-hero">
          <div className="container city-hero__grid">
            <div>
              <p className="eyebrow">
                {city.county} · {city.region}
              </p>
              <h1>{city.h1}</h1>
              <p className="lede">{city.intro[0]}</p>
              <div className="review-line">
                <span>Local sources checked {city.source_last_checked}</span>
                <span>{gate.pass ? "Publication quality gate passed" : "Editorial review required"}</span>
              </div>
            </div>
            <div className="city-cta">
              <p className="eyebrow">Local project options</p>
              <h2>Start with your ZIP code</h2>
              <p>
                See whether independent professionals handling this project may
                serve your area.
              </p>
              <ZipCheck compact label="Continue" />
            </div>
          </div>
        </section>

        <div className="container city-layout">
          <article className="prose">
            <div className="answer-box">
              <strong>Local planning summary</strong>
              <p>{city.summary}</p>
            </div>
            {city.intro.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <h2>{city.name} at a glance</h2>
            <div className="fact-grid fact-grid--city">
              {city.facts.map((fact) => (
                <article className="fact-card" key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                  <p>{fact.note}</p>
                </article>
              ))}
            </div>

            <h2>Permits and inspections</h2>
            <div className="permit-card">
              <p className="eyebrow">Authority having jurisdiction</p>
              <h3>
                <a href={city.permit.url}>{city.permit.authority}</a>
              </h3>
              <p>
                Also relevant:{" "}
                <a href={city.permit.county_url}>{city.permit.county_authority}</a>
              </p>
              <p>{city.permit.note}</p>
              <small>Official sources checked {city.source_last_checked}</small>
            </div>

            <h2>Local planning considerations</h2>
            <div className="consideration-grid">
              {city.considerations.map((item) => (
                <article key={item.h}>
                  <h3>{item.h}</h3>
                  <p>{item.d}</p>
                </article>
              ))}
            </div>

            <h2>Cost reference</h2>
            <div className="range-card range-card--inline">
              <span>National planning range</span>
              <strong>{statePage.national_cost_range.label}</strong>
              <p>
                A planning reference—not a {city.name} quote. We do not publish
                city-level prices without a verified local sample.
              </p>
              <Link href="/guides/tub-to-shower-conversion-cost/">
                Review the cost methodology
              </Link>
            </div>

            <h2>Local aging and housing resources</h2>
            <div className="resource-list">
              {city.resources.map((resource) => (
                <article key={resource.url}>
                  <h3>
                    <a href={resource.url}>{resource.name}</a>
                  </h3>
                  <p>{resource.d}</p>
                </article>
              ))}
            </div>

            <h2>{city.name} questions</h2>
            <div className="faq-list">
              {city.faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>

            <section className="sources">
              <p className="eyebrow">Primary and authoritative references</p>
              <h2>Sources</h2>
              <ul>
                {city.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url}>
                      {source.agency}: {source.title}
                    </a>
                    <span>{source.supports}</span>
                  </li>
                ))}
              </ul>
              <p className="source-date">
                Local source checks: {city.source_last_checked}. Confirm current
                requirements and program availability with the issuing authority.
              </p>
            </section>
          </article>

          <aside className="article-aside city-aside">
            <div className="aside-card">
              <p className="eyebrow">Before work begins</p>
              <h2>Review the written scope</h2>
              <ul>
                <li>Materials and products</li>
                <li>Plumbing and electrical work</li>
                <li>Waterproofing system</li>
                <li>Grab-bar and seat blocking</li>
                <li>Permits and inspections</li>
                <li>Schedule, warranty, and payment terms</li>
              </ul>
              <a href={licenseGuidance.license_search_url}>
                Verify a Florida license
              </a>
            </div>
            <div className="aside-card aside-card--plain">
              <p className="eyebrow">Nearby guides</p>
              {city.nearby.map((nearby) => (
                <Link href={relatedHref(nearby.href)} key={nearby.name}>
                  {nearby.name}
                </Link>
              ))}
              <Link href="/tub-to-shower-conversion/florida/">All Florida cities</Link>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const route = slug.join("/");

  if (route === "fl" || route === "state-of-florida") {
    redirect("/tub-to-shower-conversion/florida/");
  }

  if (route === "tub-to-shower-conversion/florida") {
    return <FloridaStatePage />;
  }

  if (slug.length === 3 && slug[0] === "tub-to-shower-conversion" && slug[1] === "florida") {
    const city = cities[slug[2]];
    if (!city) notFound();
    return <CityPage city={city} />;
  }

  const page = referencePages[route as keyof typeof referencePages];
  if (!page) notFound();

  const crumbs = route.startsWith("guides/")
    ? [
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides/" },
        { label: page.title },
      ]
    : [{ label: "Home", href: "/" }, { label: page.title }];

  const extras =
    route === "your-privacy-choices" ? (
      <PrivacyChoices />
    ) : route === "contact" ? (
      <div className="contact-panel">
        <h2>Contact Aging at Home Advisor</h2>
        <p>
          Email: <a href="mailto:support@agingathomeadvisor.com">support@agingathomeadvisor.com</a>
          <br />
          Phone: <a href="tel:+18333632420">(833) 363-2420</a>
        </p>
        <p>
          Use this contact for general, privacy, legal, correction,
          accessibility, and partnership inquiries.
        </p>
      </div>
    ) : null;

  return (
    <ArticlePage
      page={page as unknown as ReferencePage}
      route={route}
      crumbs={crumbs}
      extras={extras}
    />
  );
}
