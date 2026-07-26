import type { Metadata } from "next";
import Link from "next/link";
import { Picture } from "./components/Picture";
import { StructuredData } from "./components/StructuredData";
import { ZipCheck } from "./components/ZipCheck";

export const metadata: Metadata = {
  title: "Safer Bathroom Planning for Aging at Home",
  description:
    "Independent, plain-language guidance on accessible bathroom projects for older adults—costs, options, safety, financial assistance, and local planning.",
  alternates: { canonical: "/" },
};

const services = [
  {
    title: "Tub-to-shower conversion",
    description:
      "Replace a high tub wall with a lower-entry shower while planning for drainage, seating, grab bars, and waterproofing.",
    href: "/tub-to-shower-conversion/",
    image: "tub-to-shower-conversion",
    alt: "Low-threshold shower created by converting a bathtub alcove",
  },
  {
    title: "Walk-in showers",
    description:
      "Compare low-threshold and curbless layouts, seats, controls, flooring, and other practical safety features.",
    href: "/walk-in-showers/",
    image: "walk-in-shower",
    alt: "Residential walk-in shower with a built-in bench and grab bar",
  },
  {
    title: "Walk-in tubs",
    description:
      "Understand door seals, fill and drain times, seated bathing, installation needs, costs, and tradeoffs.",
    href: "/walk-in-tubs/",
    image: "walk-in-tub",
    alt: "Residential walk-in tub with the side door open",
  },
  {
    title: "Accessible bathroom remodel",
    description:
      "Plan the whole room—from doorway and floor space to shower, toilet, sink, lighting, and storage.",
    href: "/accessible-bathroom-remodel/",
    image: "accessible-remodel",
    alt: "Warm, residential bathroom with accessibility features",
  },
];

const guides = [
  {
    title: "Walk-in tub vs. walk-in shower",
    href: "/guides/walk-in-tub-vs-walk-in-shower/",
  },
  {
    title: "Tub-to-shower conversion costs",
    href: "/guides/tub-to-shower-conversion-cost/",
  },
  {
    title: "Bathroom safety checklist",
    href: "/guides/bathroom-safety-checklist-older-adults/",
  },
  {
    title: "Medicare and walk-in tubs",
    href: "/guides/does-medicare-cover-walk-in-tubs/",
  },
];

export default function HomePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://agingathomeadvisor.com/#webpage",
          url: "https://agingathomeadvisor.com/",
          name: "Safer Bathroom Planning for Aging at Home",
          description:
            "Independent, source-led guidance on accessible bathroom projects, safety, costs, and assistance.",
          isPartOf: { "@id": "https://agingathomeadvisor.com/#organization" },
        }}
      />
      <main id="main-content">
        <section className="home-hero">
          <div className="container home-hero__grid">
            <div>
              <p className="eyebrow">Independent guidance for safer homes</p>
              <h1>Make your home safer for the years ahead.</h1>
              <p className="lede">
                Compare accessible bathroom projects, understand realistic
                planning ranges, find possible financial assistance, and check
                local project options—without pressure or exaggerated claims.
              </p>
              <div className="trust-row" aria-label="Our standards">
                <span>Source-led</span>
                <span>No fabricated local prices</span>
                <span>Plain-language guidance</span>
              </div>
              <ZipCheck label="See local options" />
            </div>
            <figure>
              <Picture
                name="home-accessible-bathroom"
                alt="Bright residential bathroom with a low-entry shower, grab bars, and clear floor space"
                eager
              />
              <figcaption>
                A safer bathroom should still feel like home: comfortable,
                attractive, and planned around the person using it.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Start with the right project</p>
                <h2>Bathroom options for different needs</h2>
              </div>
              <Link href="/bathroom-accessibility/">Compare all options</Link>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.href}>
                  <Picture name={service.image} alt={service.alt} />
                  <div>
                    <h3>
                      <Link href={service.href}>{service.title}</Link>
                    </h3>
                    <p>{service.description}</p>
                    <Link className="text-link" href={service.href}>
                      Explore this option <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container split-section">
            <div>
              <p className="eyebrow">A practical planning process</p>
              <h2>Make decisions in the right order</h2>
              <p className="lede lede--small">
                Start with daily barriers, then compare project scope, features,
                funding, and written estimates. A product alone does not make a
                bathroom accessible.
              </p>
              <Link className="button button--primary" href="/bathroom-accessibility/">
                Build your plan
              </Link>
            </div>
            <ol className="step-list">
              <li>
                <strong>Identify the difficult moments</strong>
                <span>Entry, transfers, standing, controls, and floor traction.</span>
              </li>
              <li>
                <strong>Compare suitable project types</strong>
                <span>Choose around the person and the existing bathroom.</span>
              </li>
              <li>
                <strong>Verify scope and credentials</strong>
                <span>Review permits, licensing, insurance, materials, and warranties.</span>
              </li>
              <li>
                <strong>Compare written estimates</strong>
                <span>Local quotes—not national ranges—are the real project price.</span>
              </li>
            </ol>
          </div>
        </section>

        <section className="section">
          <div className="container editorial-grid">
            <div>
              <p className="eyebrow">Why readers can trust the process</p>
              <h2>Useful answers without invented certainty</h2>
              <p>
                We distinguish sourced national planning ranges from real local
                quotes. Benefit coverage is never guaranteed. Local pages identify
                official permit authorities and public aging resources without
                pretending we have local offices or vetted every professional.
              </p>
              <div className="link-cluster">
                <Link href="/editorial-policy/">Editorial policy</Link>
                <Link href="/how-we-make-money/">How we make money</Link>
                <Link href="/corrections-policy/">Corrections policy</Link>
              </div>
            </div>
            <div className="guide-list">
              <h3>Popular planning guides</h3>
              {guides.map((guide) => (
                <Link href={guide.href} key={guide.href}>
                  {guide.title} <span aria-hidden="true">→</span>
                </Link>
              ))}
              <Link className="text-link" href="/guides/">
                Browse every guide
              </Link>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container cta-band__inner">
            <div>
              <p className="eyebrow">Florida local guides</p>
              <h2>Planning a tub-to-shower conversion in Florida?</h2>
              <p>
                Explore state guidance plus 17 city pages built from verified
                permit, Census, assistance, and local-resource records.
              </p>
            </div>
            <Link className="button button--light" href="/tub-to-shower-conversion/florida/">
              Explore Florida guides
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

