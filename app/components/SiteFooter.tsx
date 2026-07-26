import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">Aging at Home Advisor</p>
          <p>
            Independent, plain-language guidance for safer bathrooms and aging at
            home.
          </p>
          <p>
            Operated by ROI PERFORMANCE LLC
            <br />
            13727 SW 152 Street #848, Miami, FL 33177
          </p>
        </div>
        <div>
          <h2>Plan your project</h2>
          <Link href="/bathroom-accessibility/">Bathroom accessibility</Link>
          <Link href="/tub-to-shower-conversion/">Tub-to-shower conversion</Link>
          <Link href="/financial-assistance/">Financial assistance</Link>
          <Link href="/guides/">Guide library</Link>
        </div>
        <div>
          <h2>Our standards</h2>
          <Link href="/about/">About us</Link>
          <Link href="/editorial-policy/">Editorial policy</Link>
          <Link href="/corrections-policy/">Corrections policy</Link>
          <Link href="/how-we-make-money/">How we make money</Link>
        </div>
        <div>
          <h2>Privacy and legal</h2>
          <Link href="/privacy-policy/">Privacy policy</Link>
          <Link href="/your-privacy-choices/">Your privacy choices</Link>
          <Link href="/notice-at-collection/">Notice at collection</Link>
          <Link href="/terms/">Terms of use</Link>
          <Link href="/accessibility-statement/">Accessibility</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 ROI PERFORMANCE LLC. All rights reserved.</p>
        <p>
          Aging at Home Advisor is an information and referral platform—not a
          contractor, government agency, insurer, or medical provider.
        </p>
      </div>
    </footer>
  );
}

