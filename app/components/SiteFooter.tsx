import Link from "next/link";

function FooterBrand() {
  return (
    <span className="footer-logo">
      <svg width="32" height="32" viewBox="0 0 36 36" aria-hidden="true">
        <path d="M18 3.5 33 15v17H22.5v-9.5h-9V32H3V15Z" fill="#f7f3e9" />
        <circle cx="18" cy="27.5" r="2.6" fill="#c97b4a" />
      </svg>
      <span>
        <strong>Aging at Home</strong>
        <small>Advisor</small>
      </span>
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <FooterBrand />
          <p>Trusted guidance for aging safely at home.</p>
        </div>
        <div>
          <h2>Solutions</h2>
          <Link href="/bathroom-accessibility/">Bathroom accessibility</Link>
          <Link href="/walk-in-showers/">Walk-in showers</Link>
          <Link href="/walk-in-tubs/">Walk-in tubs</Link>
          <Link href="/tub-to-shower-conversion/">Tub-to-shower conversion</Link>
        </div>
        <div>
          <h2>Resources</h2>
          <Link href="/financial-assistance/">Financial assistance</Link>
          <Link href="/guides/">Guides</Link>
          <Link href="/bathroom-accessibility/#costs">Typical costs</Link>
          <Link href="/tub-to-shower-conversion/florida/">Find local options</Link>
        </div>
        <div>
          <h2>Company</h2>
          <Link href="/about/">About</Link>
          <Link href="/editorial-policy/">Editorial policy</Link>
          <Link href="/corrections-policy/">Corrections policy</Link>
          <Link href="/how-we-make-money/">How we make money</Link>
          <Link href="/accessibility-statement/">Accessibility</Link>
          <Link href="/contact/">Contact</Link>
        </div>
        <div>
          <h2>Legal</h2>
          <Link href="/privacy-policy/">Privacy policy</Link>
          <Link href="/cookie-policy/">Cookie policy</Link>
          <Link href="/terms/">Terms of use</Link>
          <Link href="/notice-at-collection/">Notice at collection</Link>
          <Link href="/your-privacy-choices/">Your privacy choices</Link>
        </div>
      </div>
      <div className="container footer-disclosure">
        <p>
          Aging at Home Advisor, operated by ROI PERFORMANCE LLC, is an independent
          information and referral platform. It is not a government agency,
          medical provider, insurer, or home improvement contractor, and it may
          receive compensation when project inquiries are shared with independent
          professionals—see <Link href="/how-we-make-money/">How We Make Money</Link>.
          Cost figures are national planning ranges, not quotes.
        </p>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Aging at Home Advisor. All rights reserved.</p>
        <p>AgingAtHomeAdvisor.com</p>
      </div>
    </footer>
  );
}
