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
    title: "Tub-to-Shower Conversion",
    description:
      "Replace a difficult-to-enter bathtub with a safer, lower-entry shower.",
    href: "/tub-to-shower-conversion/",
    image: "tub-to-shower-conversion",
    alt: "Low-threshold shower created by converting a bathtub alcove",
  },
  {
    title: "Walk-In Showers",
    description:
      "Explore accessible showers with low thresholds, seating, and safety features.",
    href: "/walk-in-showers/",
    image: "walk-in-shower",
    alt: "Residential walk-in shower with a built-in bench and grab bar",
  },
  {
    title: "Walk-In Tubs",
    description:
      "Compare walk-in bathtub options, features, costs, and installation considerations.",
    href: "/walk-in-tubs/",
    image: "walk-in-tub",
    alt: "Residential walk-in tub with the side door open",
  },
  {
    title: "Accessible Bathroom Remodel",
    description:
      "Plan a more complete bathroom update for comfort, accessibility, and long-term use.",
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
            <div className="home-hero__copy">
              <p className="eyebrow">Independent guidance for a safer home</p>
              <h1>Make Your Home Safer for the Years Ahead</h1>
              <p className="lede">
                Explore accessible bathroom solutions, understand costs and
                financial assistance, and connect with qualified home improvement
                professionals.
              </p>
              <div className="hero-actions">
                <Link className="button button--primary" href="/contact/">
                  Find Options Near You
                </Link>
                <Link className="button button--secondary" href="/bathroom-accessibility/">
                  Explore Bathroom Solutions
                </Link>
              </div>
              <ZipCheck label="See local options" />
            </div>
            <figure>
              <Picture
                name="home-accessible-bathroom"
                alt="Bright accessible bathroom with a low-threshold walk-in shower in natural daylight"
                eager
                sizes="(max-width: 780px) 100vw, 48vw"
              />
            </figure>
          </div>
        </section>

        <section className="home-proof" aria-label="Why use Aging at Home Advisor">
          <div className="container home-proof__grid">
            {[
              "Independent consumer guidance",
              "Clear cost information",
              "Local project options",
              "Free, no-obligation request",
            ].map((item) => (
              <span key={item}>
                <i aria-hidden="true">✓</i>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <h2>What would you like to make safer?</h2>
                <p>
                  Start with the project you&apos;re considering. Each option
                  explains what&apos;s involved, typical costs, and what to plan for.
                </p>
              </div>
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
                      Learn more <span aria-hidden="true">→</span>
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
