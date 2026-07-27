# AgingAtHomeAdvisor.com — production static export

This folder is the deployable website. Every page was rendered directly from the
design source (templates + `florida-cities.js` / `florida-data.js`) — copy, design,
and functionality are exact. Upload the **contents of this folder** to any static
host (Netlify, Vercel, Cloudflare Pages, S3+CloudFront, shared hosting).

## Contents

- 50 pages at their final URLs (`/`, `/guides/<slug>/`, `/tub-to-shower-conversion/florida/<city>/`, `/get-started/`, legal pages) — each folder contains an `index.html`
- `js/site.js` — header sizing, first-visit privacy notice, all ZIP forms, safety-checklist persistence, contact form, gated analytics loader
- `js/lead-form.js` — two-step lead form: validation, TCPA consent gating, exact LeadByte field mapping, client-side POST to `roiperformance.leadbyte.co.uk` (`campid=BATHROOM-REMODELING`, `sid=1`)
- `js/privacy-choices.js` — opt-out toggles, GPC auto-detection, first-party cookies (`aaha_advertising_optout`, `aaha_analytics_optout`)
- `images/` — all 26 photos, SEO filenames preserved
- `robots.txt`, `sitemap.xml`, `sitemaps/` — copied verbatim (production URLs)

All internal links are relative, so the site also works from a subdirectory or
local preview. Every page carries its self-referencing canonical, meta description,
robots directive, and WebPage + BreadcrumbList JSON-LD.

## Host requirements

1. Serve `index.html` for directory URLs (every static host does this by default).
2. HTTPS on `agingathomeadvisor.com`, redirect `www` → apex (or vice versa, matching canonicals: apex, no www).
3. Optional but recommended: 301 `/*/index.html` → `/*/` to avoid duplicate URLs.

## Configuration before go-live

1. **Analytics**: set `GA4_ID` and `META_PIXEL_ID` at the bottom of `js/site.js`.
   Tags only load per the US opt-out model already implemented (GPC + cookie opt-outs honored).
2. **Lead delivery**: the form POSTs to LeadByte from the browser and works as-is.
   Recommended hardening (per HANDOFF.md §4.2): proxy the submission server-side to
   capture `ip_address`, avoid CORS exposure, and add a retry queue. Add TrustedForm/Jornaya if buyers require it.
3. **Contact form** (`/contact/`) and **privacy request form** (`/your-privacy-choices/`)
   show a confirmation but are not connected to a backend — wire them to
   support@agingathomeadvisor.com or keep the email-only path.

## Test checklist

- Lead funnel: home → ZIP form → `/get-started/?zip=…&project=…&source=…` → step 1 → step 2 → consent unchecked blocks submit → valid submit reaches LeadByte → thank-you shows ZIP.
- Privacy: first visit shows the notice bar once; `/your-privacy-choices/` toggles persist across reloads; GPC browser auto-opts out of advertising.
- Safety checklist (`/guides/bathroom-safety-checklist-older-adults/`): checks persist, progress % updates, print button works, reset clears.
- Mobile 390px: no horizontal overflow on home, a guide, a city page, the lead form.
- Search Console after deploy: verify domain, submit `/sitemap.xml`.

Data caveat (unchanged from HANDOFF.md): ACS figures and permit URLs across the 17
city pages still need one verification pass against data.census.gov and the
municipal sites before requesting indexing.
