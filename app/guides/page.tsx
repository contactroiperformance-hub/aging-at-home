import type { Metadata } from "next";
import Link from "next/link";
import { referencePages } from "../content/reference-pages";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Picture } from "../components/Picture";
import { StructuredData } from "../components/StructuredData";

export const metadata: Metadata = {
  title: "Accessible Bathroom Planning Guides",
  description:
    "Practical, sourced guides on accessible bathroom costs, comparisons, Medicare, Medicaid, VA benefits, project timelines, and safety.",
  alternates: { canonical: "/guides/" },
};

export default function GuidesPage() {
  const guides = Object.entries(referencePages).filter(([route]) =>
    route.startsWith("guides/"),
  );

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": "https://agingathomeadvisor.com/guides/#webpage",
          url: "https://agingathomeadvisor.com/guides/",
          name: "Accessible Bathroom Planning Guides",
          description:
            "Source-led cost, safety, comparison, and financial-assistance guides.",
          isPartOf: { "@id": "https://agingathomeadvisor.com/#organization" },
        }}
      />
      <main id="main-content">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
        </div>
        <section className="page-hero">
          <div className="container narrow">
            <p className="eyebrow">Source-led planning library</p>
            <h1>Helpful guides for planning ahead</h1>
            <p className="lede">
              Compare project types, understand costs, review safety features,
              and learn where public benefits may—or may not—help.
            </p>
          </div>
        </section>
        <section className="section section--tight">
          <div className="container guide-grid">
            {guides.map(([route, guide]) => (
              <article className="guide-card" key={route}>
                {"image" in guide && "imageAlt" in guide ? (
                  <Picture name={guide.image} alt={guide.imageAlt} />
                ) : null}
                <div>
                  <p className="eyebrow">{guide.eyebrow}</p>
                  <h2>
                    <Link href={`/${route}/`}>{guide.title}</Link>
                  </h2>
                  <p>{guide.description}</p>
                  <Link className="text-link" href={`/${route}/`}>
                    Read the guide <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

