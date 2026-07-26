import Link from "next/link";

const navigation = [
  { href: "/bathroom-accessibility/", label: "Bathroom Solutions" },
  { href: "/bathroom-accessibility/#costs", label: "Costs" },
  { href: "/financial-assistance/", label: "Financial Assistance" },
  { href: "/guides/", label: "Guides" },
  { href: "/about/", label: "About" },
];

function HouseMark() {
  return (
    <svg width="38" height="38" viewBox="0 0 36 36" aria-hidden="true">
      <path d="M18 3.5 33 15v17H22.5v-9.5h-9V32H3V15Z" fill="currentColor" />
      <circle cx="18" cy="27.5" r="2.6" fill="#c97b4a" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Aging at Home Advisor, home">
          <span className="brand-mark"><HouseMark /></span>
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
        <a className="header-phone" href="tel:+18333632420">
          <small>Call for guidance</small>
          <strong>(833) 363-2420</strong>
        </a>
        <Link className="button button--header" href="/contact/">
          Find Options Near You
        </Link>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <a href="tel:+18333632420">Call (833) 363-2420</a>
            <Link href="/contact/">Find Options Near You</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
