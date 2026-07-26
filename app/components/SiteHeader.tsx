import Link from "next/link";

const navigation = [
  { href: "/bathroom-accessibility/", label: "Bathroom safety" },
  { href: "/tub-to-shower-conversion/", label: "Tub-to-shower" },
  { href: "/walk-in-showers/", label: "Walk-in showers" },
  { href: "/walk-in-tubs/", label: "Walk-in tubs" },
  { href: "/guides/", label: "Guides" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Aging at Home Advisor, home">
          <span className="brand-mark" aria-hidden="true">
            AH
          </span>
          <span>
            <strong>Aging at Home</strong>
            <small>Advisor</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button--header" href="/contact/">
          Find local options
        </Link>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact/">Find local options</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

