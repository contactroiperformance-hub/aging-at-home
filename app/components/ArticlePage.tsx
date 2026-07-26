import { Breadcrumbs, Crumb } from "./Breadcrumbs";
import { Picture } from "./Picture";
import { StructuredData } from "./StructuredData";
import { ZipCheck } from "./ZipCheck";

export type ReferencePage = {
  type: string;
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  blocks: readonly { type: "heading" | "paragraph" | "bullet"; text: string }[];
  sources: readonly { label: string; url: string }[];
};

const siteUrl = "https://agingathomeadvisor.com";

export function ArticlePage({
  page,
  route,
  crumbs,
  extras,
}: {
  page: ReferencePage;
  route: string;
  crumbs: Crumb[];
  extras?: React.ReactNode;
}) {
  const isGuide = page.type === "guide";
  const isLegal = page.type === "legal";
  const schemaType =
    page.type === "collection" ? "CollectionPage" : isGuide ? "Article" : "WebPage";

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": schemaType,
          "@id": `${siteUrl}/${route}/#webpage`,
          url: `${siteUrl}/${route}/`,
          name: page.title,
          description: page.description,
          dateModified: "2026-07-26",
          isPartOf: { "@id": `${siteUrl}/#organization` },
          ...(isGuide
            ? {
                headline: page.title,
                datePublished: "2026-07-26",
                author: { "@id": `${siteUrl}/#organization` },
              }
            : {}),
        }}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.label,
            item: crumb.href ? `${siteUrl}${crumb.href}` : `${siteUrl}/${route}/`,
          })),
        }}
      />
      <main id="main-content">
        <div className="container wrap">
          <Breadcrumbs items={crumbs} />
        </div>
        <section className={`page-hero ${page.image ? "page-hero--with-image" : ""}`}>
          <div className="container wrap page-hero__grid">
            <div>
              <p className="eyebrow">{page.eyebrow}</p>
              <h1>{page.title}</h1>
              <p className="lede lead">{page.description}</p>
            </div>
            {page.image && page.imageAlt ? (
              <Picture name={page.image} alt={page.imageAlt} eager />
            ) : null}
          </div>
        </section>
        <div
          className={`container wrap article-layout article-shell ${isGuide ? "article-layout--guide" : ""} ${isLegal ? "article-layout--legal" : ""}`}
        >
          <article className="prose">
            {extras}
            {page.blocks.map((block, index) => {
              if (block.type === "heading") {
                return <h2 key={`${block.text}-${index}`}>{block.text}</h2>;
              }
              if (block.type === "bullet") {
                return (
                  <p className="prose-bullet" key={`${block.text}-${index}`}>
                    {block.text}
                  </p>
                );
              }
              return <p key={`${block.text}-${index}`}>{block.text}</p>;
            })}
            {page.sources.length ? (
              <section className="sources" aria-labelledby="sources-heading">
                <p className="eyebrow">Primary and authoritative references</p>
                <h2 id="sources-heading">Sources</h2>
                <ul>
                  {page.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} rel="noopener noreferrer">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </article>
          {!isLegal ? (
            <aside className="article-aside sidebar">
              <div className="aside-card card card--panel">
                <ZipCheck compact label="Find Options Near You" />
                <p className="fine">
                  Free and no obligation. We’ll show whether professionals serve
                  your area.
                </p>
              </div>
            </aside>
          ) : null}
        </div>
      </main>
    </>
  );
}
