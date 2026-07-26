import type { Metadata } from "next";
import Link from "next/link";
import { Picture } from "./components/Picture";
import { StructuredData } from "./components/StructuredData";
import { ZipCheck } from "./components/ZipCheck";

export const metadata: Metadata = {
  title: "Safer Bathroom Planning for Aging at Home",
  description:
    "Independent, plain-language guidance on accessible bathroom projects for older adults — costs, options, safety and funding, plus local project options by ZIP code.",
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
    title: "Walk-In Tub vs. Walk-In Shower",
    description:
      "How the two options compare on safety, comfort, cost, and everyday use.",
    href: "/guides/walk-in-tub-vs-walk-in-shower/",
  },
  {
    title: "Does Medicare Cover Walk-In Tubs?",
    description:
      "What Medicare typically does and does not pay for, and where else to look.",
    href: "/guides/does-medicare-cover-walk-in-tubs/",
  },
  {
    title: "Tub-to-Shower Conversion Costs",
    description:
      "What drives the price of a conversion and how to budget realistically.",
    href: "/guides/tub-to-shower-conversion-cost/",
  },
  {
    title: "Bathroom Safety Checklist",
    description:
      "A room-by-room checklist for spotting and fixing common bathroom hazards.",
    href: "/guides/bathroom-safety-checklist-older-adults/",
  },
  {
    title: "Home Modification Grants for Older Adults",
    description:
      "Programs that may help pay for accessibility improvements, state by state.",
    href: "/financial-assistance/",
  },
];

const costRanges = [
  ["Tub-to-shower conversion", "$3,000–$8,000"],
  ["Walk-in shower", "$4,000–$12,000"],
  ["Walk-in tub", "$5,000–$15,000"],
  ["Full accessible bathroom remodel", "$15,000–$40,000"],
] as const;

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
            "Independent, plain-language guidance on accessible bathroom projects for older adults — costs, options, safety and funding, plus local project options by ZIP code.",
          isPartOf: { "@id": "https://agingathomeadvisor.com/#organization" },
        }}
      />
      <main id="main-content">
        <section className="home-hero">
          <div className="container wrap-wide home-hero__grid">
            <div className="home-hero__copy">
              <p className="eyebrow">Independent guidance for a safer home</p>
              <h1>Make Your Home Safer for the Years Ahead</h1>
              <p className="lede lead">
                Explore accessible bathroom solutions, understand costs and
                financial assistance, and connect with qualified home improvement
                professionals.
              </p>
              <div className="hero-actions">
                <Link className="button button--primary btn btn--cta" href="/lead-form/?source=home&page_type=home">
                  Find Options Near You
                </Link>
                <Link className="button button--secondary btn btn--ghost" href="/bathroom-accessibility/">
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
          <div className="container wrap-wide home-proof__grid">
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

        <section className="section section--white">
          <div className="container wrap-wide">
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
                <article className="service-card card" key={service.href}>
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

        <section className="section section--band">
          <div className="container wrap-wide">
            <h2>A simpler way to plan a safer home</h2>
            <div className="grid home-process-grid">
              {[
                ["1", "Explore your options", "Learn how each project works and which safety features matter most for your home."],
                ["2", "Understand costs and assistance", "See typical cost ranges and learn where financial assistance may be available."],
                ["3", "Connect with professionals", "Share your ZIP code to see whether qualified professionals serve your area."],
              ].map(([number, title, description]) => (
                <article className="card card--lg" key={number}>
                  <span className="home-step-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--white" id="costs">
          <div className="container wrap-wide">
            <h2>Understand the cost before you begin</h2>
            <p className="lead home-section-intro">
              Typical national ranges for common bathroom accessibility projects.
              Actual costs depend on your bathroom, materials, and local labor.
            </p>
            <div className="card card--lg home-cost-card">
              {costRanges.map(([name, range]) => (
                <div className="home-cost-row" key={name}>
                  <strong>{name}</strong>
                  <strong>{range}</strong>
                </div>
              ))}
              <Link className="btn btn--teal" href="/bathroom-accessibility/#costs">
                Compare Bathroom Project Costs
              </Link>
            </div>
          </div>
        </section>

        <section className="section section--teal">
          <div className="container wrap-wide split-section">
            <div>
              <h2>Financial assistance may be available</h2>
              <p className="lead">
                Some homeowners may qualify for assistance through Medicaid
                programs, veterans&apos; benefits, local organizations, or home
                modification programs.
              </p>
              <Link className="btn btn--ghost" href="/financial-assistance/">
                Explore Financial Assistance
              </Link>
            </div>
            <div className="home-finance-note">
              <p>
                <strong>Please note:</strong> eligibility varies by program, state,
                personal circumstances, and project type. Assistance is never
                guaranteed, and program rules can change. Always confirm details
                with the relevant program.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--white" id="guides">
          <div className="container wrap-wide">
            <h2>Helpful guides for planning ahead</h2>
            <p className="lead home-section-intro">
              Practical, plain-language answers to the questions families ask most.
            </p>
            <div className="grid">
              {guides.map((guide) => (
                <Link className="card" href={guide.href} key={guide.href}>
                  <span className="eyebrow">Guide</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <strong>Read the guide →</strong>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--band">
          <div className="container wrap home-final-cta">
            <h2>Ready to explore options for your home?</h2>
            <p className="lead">
              Tell us what you are considering and see whether professionals
              serve your area.
            </p>
            <ZipCheck label="Find Options Near You" />
          </div>
        </section>
      </main>
    </>
  );
}
