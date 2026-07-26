import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import {
  assistancePrograms,
  demographics,
  licenseGuidance,
  officialSources,
  statePage,
  statePageContent,
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
        <div className="container wrap-wide">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Tub-to-shower conversion", href: "/tub-to-shower-conversion/" },
              { label: "Florida" },
            ]}
          />
        </div>
        <section className="page-hero page-hero--state">
          <div className="container wrap-wide state-hero">
            <div>
              <p className="eyebrow">{statePageContent.eyebrow}</p>
              <h1>{statePage.h1}</h1>
              <p className="lede lead">{statePageContent.heroSupport}</p>
              <ZipCheck label={statePageContent.finalCta.button} />
              <p className="fine state-disclaimer">{statePageContent.heroDisclaimer}</p>
            </div>
            <div className="card card--lg card--panel">
              <p>{statePageContent.intro}</p>
            </div>
          </div>
        </section>

        <section className="section section--white">
          <div className="container wrap-wide">
            <h2>{statePageContent.projectTypesHeading}</h2>
            <div className="grid state-project-grid">
              {statePageContent.projectTypes.map((project) => (
                <article className="card card--lg" key={project.name}>
                  <h3>{project.name}</h3>
                  <p>{project.desc}</p>
                  <div className="row">
                    <span className="chip">{project.complexity}</span>
                    <span className="chip">{project.costPos}</span>
                  </div>
                  <p className="fine">
                    <strong>Plan for:</strong> {project.planning}
                  </p>
                  <Link href={project.href}>{project.linkLabel} →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint section--band">
          <div className="container wrap-wide">
            <h2>{statePageContent.costHeading}</h2>
            <div className="split-section split-section--wide state-cost-layout">
              <div className="range-card card card--lg">
                <span className="stat-label">National planning range</span>
                <strong className="stat">{statePage.national_cost_range.label}</strong>
                <p>{statePageContent.costNationalNote}</p>
                <Link href="/guides/tub-to-shower-conversion-cost/">
                  Read the conversion cost guide
                </Link>
              </div>
              <div className="note">
                <p>{statePageContent.costProprietaryNote}</p>
              </div>
            </div>
            <h3>{statePageContent.costDriversHeading}</h3>
            <div className="checklist grid grid--tight state-driver-list">
              {statePageContent.costDrivers.map((driver) => (
                <span key={driver}>✓ {driver}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--white">
          <div className="container wrap-wide">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Statewide context</p>
                <h2>Florida housing and aging, by the numbers</h2>
              </div>
              <span className="source-date fine">{demographics.vintage}</span>
            </div>
            <div className="fact-grid grid">
              {demographics.metrics.map((metric) => (
                <article className="fact-card card" key={metric.label}>
                  <span className="stat-label">{metric.label}</span>
                  <strong className="stat">{metric.estimate}</strong>
                  <p>{metric.note}</p>
                </article>
              ))}
            </div>
            <p className="source-date fine">
              Source:{" "}
              <a href={demographics.source_url}>U.S. Census Bureau, American Community Survey</a>.
              Retrieved {demographics.retrieved_at}. Estimates describe the state,
              not an individual household.
            </p>
          </div>
        </section>

        <section className="section section--tint section--band">
          <div className="container wrap-wide">
            <h2>{statePageContent.contractorHeading}</h2>
            <p className="lead">{statePageContent.contractorIntro}</p>
            <div className="checklist state-contractor-list">
              {statePageContent.contractorPoints.map((point) => (
                <span key={point}>✓ {point}</span>
              ))}
            </div>
            <div className="note">
              <p>{statePageContent.permitNote}</p>
            </div>
            <a
              className="btn btn--teal"
              href={licenseGuidance.license_search_url}
              rel="noopener noreferrer"
            >
              Search Florida DBPR licenses
            </a>
          </div>
        </section>

        <section className="section section--white">
          <div className="container wrap-wide">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Eligibility varies</p>
                <h2>{statePageContent.assistanceHeading}</h2>
                <p>{statePageContent.assistanceIntro}</p>
              </div>
              <Link href="/financial-assistance/">Read the full assistance guide</Link>
            </div>
            <div className="program-grid grid">
              {assistancePrograms.map((program) => (
                <article className="program-card card" key={program.program}>
                  <span className="stat-label">{program.agency}</span>
                  <h3>{program.program}</h3>
                  <p><strong>Who it serves:</strong> {program.population}</p>
                  <p><strong>Bathroom relevance:</strong> {program.relevance}</p>
                  <a href={program.source} rel="noopener noreferrer">Official program page</a>
                </article>
              ))}
            </div>
            <div className="note"><p>{statePageContent.vaNote}</p></div>
          </div>
        </section>

        <section className="section section--band">
          <div className="container wrap-wide">
            <h2>{statePageContent.considerationsHeading}</h2>
            <div className="consideration-grid grid">
              {statePageContent.considerations.map((item) => (
                <article className="card" key={item.h}>
                  <h3>{item.h}</h3>
                  <p>{item.d}</p>
                </article>
              ))}
            </div>
            <p className="fine">{statePageContent.considerationsFooter}</p>
          </div>
        </section>

        <section className="section section--white">
          <div className="container wrap-wide">
            <h2>{statePageContent.processHeading}</h2>
            <ol className="state-process grid grid--tight">
              {statePageContent.process.map((step, index) => (
                <li className="card" key={step}>
                  <span className="stat">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <Link href={statePageContent.processLink.href}>
              {statePageContent.processLink.label} →
            </Link>
          </div>
        </section>

        <section className="section section--tint section--band">
          <div className="container wrap-wide">
            <div className="section-heading">
              <div>
                <p className="eyebrow">17 publication-ready city records</p>
                <h2>{statePageContent.cityDirectoryHeading}</h2>
                <p>{statePageContent.cityDirectoryIntro}</p>
              </div>
            </div>
            <div className="city-directory grid grid--tight">
              {Object.entries(
                publishedCities.reduce<Record<string, City[]>>((groups, city) => {
                  (groups[city.region] ??= []).push(city);
                  return groups;
                }, {}),
              ).map(([region, regionCities]) => (
                <section className="city-region card" key={region}>
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

        <section className="section section--white">
          <div className="container wrap-wide split-section split-section--wide">
            <div>
              <h2>{statePageContent.availabilityHeading}</h2>
              <p>{statePageContent.availabilityBody}</p>
            </div>
            <div className="card card--panel">
              <ZipCheck label="Check Local Options" />
            </div>
          </div>
        </section>

        <section className="section section--band">
          <div className="container wrap">
            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              {statePageContent.faqs.map((faq) => (
                <details className="faq" key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
            <div className="related-guides">
              <p className="eyebrow">Related guides</p>
              <div className="chip-list">
                {statePageContent.related.map((related) => (
                  <Link className="chip" href={related.href} key={related.href}>
                    {related.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section--white">
          <div className="container wrap-wide sources">
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

        <section className="section section--teal">
          <div className="container wrap state-final-cta">
            <h2>{statePageContent.finalCta.heading}</h2>
            <p>{statePageContent.finalCta.body}</p>
            <ZipCheck label={statePageContent.finalCta.button} />
            <p className="fine">{statePageContent.finalCta.reassurance}</p>
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
        <div className="container wrap-wide">
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
          <div className="container wrap-wide city-hero__grid">
            <div>
              <p className="eyebrow">
                {city.county} · {city.region}
              </p>
              <h1>{city.h1}</h1>
              <p className="lede lead">{city.intro[0]}</p>
              <div className="review-line meta">
                <span>Local sources checked {city.source_last_checked}</span>
                <span>{gate.pass ? "Publication quality gate passed" : "Editorial review required"}</span>
              </div>
            </div>
            <div className="city-cta card card--lg card--panel">
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

        <div className="container wrap-wide city-layout article-shell">
          <article className="prose">
            <div className="answer-box note">
              <strong>Local planning summary</strong>
              <p>{city.summary}</p>
            </div>
            {city.intro.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <h2>{city.name} at a glance</h2>
            <div className="fact-grid fact-grid--city grid">
              {city.facts.map((fact) => (
                <article className="fact-card card" key={fact.label}>
                  <span className="stat-label">{fact.label}</span>
                  <strong className="stat">{fact.value}</strong>
                  <p>{fact.note}</p>
                </article>
              ))}
            </div>

            <h2>Permits and inspections</h2>
            <div className="permit-card card">
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
            <div className="consideration-grid grid">
              {city.considerations.map((item) => (
                <article className="card" key={item.h}>
                  <h3>{item.h}</h3>
                  <p>{item.d}</p>
                </article>
              ))}
            </div>

            <h2>Cost reference</h2>
            <div className="range-card range-card--inline card card--lg">
              <span className="stat-label">National planning range</span>
              <strong className="stat">{statePage.national_cost_range.label}</strong>
              <p>
                A planning reference—not a {city.name} quote. We do not publish
                city-level prices without a verified local sample.
              </p>
              <Link href="/guides/tub-to-shower-conversion-cost/">
                Review the cost methodology
              </Link>
            </div>

            <h2>Local aging and housing resources</h2>
            <div className="resource-list grid">
              {city.resources.map((resource) => (
                <article className="card" key={resource.url}>
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
                <details className="faq" key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>

            <section className="sources">
              <p className="eyebrow">Primary and authoritative references</p>
              <h2>Sources</h2>
              <ul className="checklist">
                {city.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url}>
                      {source.agency}: {source.title}
                    </a>
                    <span>{source.supports}</span>
                  </li>
                ))}
              </ul>
              <p className="source-date fine">
                Local source checks: {city.source_last_checked}. Confirm current
                requirements and program availability with the issuing authority.
              </p>
            </section>
          </article>

          <aside className="article-aside city-aside sidebar sidebar--wide">
            <div className="aside-card card card--panel">
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
            <div className="aside-card aside-card--plain card">
              <p className="eyebrow">Nearby guides</p>
              {city.nearby.map((nearby) => (
                <Link className="chip" href={relatedHref(nearby.href)} key={nearby.name}>
                  {nearby.name}
                </Link>
              ))}
              <Link className="chip" href="/tub-to-shower-conversion/florida/">All Florida cities</Link>
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
      <div className="contact-panel note">
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
