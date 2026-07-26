import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <div className="container narrow">
        <p className="eyebrow">Page not found</p>
        <h1>We couldn’t find that guide.</h1>
        <p className="lede">
          The page may have moved. Start with the guide library or compare
          accessible bathroom options.
        </p>
        <div className="button-row">
          <Link className="button button--primary" href="/guides/">
            Browse guides
          </Link>
          <Link className="button button--secondary" href="/bathroom-accessibility/">
            Compare bathroom options
          </Link>
        </div>
      </div>
    </main>
  );
}

