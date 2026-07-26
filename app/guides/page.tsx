import type { Metadata } from "next";
import Link from "next/link";
import { referencePages } from "../content/reference-pages";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Picture } from "../components/Picture";
import { StructuredData } from "../components/StructuredData";
import { ZipCheck } from "../components/ZipCheck";

export const metadata: Metadata = {
  title: "Accessible Bathroom Planning Guides",
  description:
    "Practical, sourced guides on accessible bathroom costs, comparisons, coverage and safety for older adults and their families.",
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
            "Practical, sourced guides on accessible bathroom costs, comparisons, coverage and safety for older adults and their families.",
          isPartOf: { "@id": "https://agingathomeadvisor.com/#organization" },
        }}
      />
      <main id="main-content">
        <div className="container wrap">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
        </div>
        <section className="page-hero">
          <div className="container wrap narrow">
            <p className="eyebrow">Guides</p>
            <h1>Helpful guides for planning ahead</h1>
            <p className="lede lead">
              Practical, plain-language answers about costs, comparisons,
              coverage, and safety. Every guide below is published, fully
              sourced, and dated — expert-review credits appear once a qualified
              review is completed.
            </p>
          </div>
        </section>
        <section className="section section--tight section--white">
          <div className="container wrap-wide guide-grid grid">
            {guides.map(([route, guide]) => (
              <article className="guide-card card" key={route}>
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
        <section className="section section--band">
          <div className="container wrap state-final-cta">
            <h2>Done reading and ready to plan?</h2>
            <p>See whether qualified bathroom professionals serve your area.</p>
            <ZipCheck label="Find Options Near You" />
          </div>
        </section>
      </main>
    </>
  );
}
