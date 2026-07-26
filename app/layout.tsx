import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";
import "./design-system.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { StructuredData } from "./components/StructuredData";

const siteUrl = "https://agingathomeadvisor.com";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const candidateHost =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "";
  const host = /^[a-z0-9.-]+(?::\d+)?$/i.test(candidateHost)
    ? candidateHost
    : "agingathomeadvisor.com";
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto");
  const protocol =
    forwardedProtocol === "http" || forwardedProtocol === "https"
      ? forwardedProtocol
      : host.includes("localhost")
        ? "http"
        : "https";
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Aging at Home Advisor | Safer Bathroom Planning",
      template: "%s | Aging at Home Advisor",
    },
    description:
      "Independent, plain-language guidance on accessible bathroom projects, costs, safety, financial assistance, and local planning.",
    applicationName: "Aging at Home Advisor",
    referrer: "origin-when-cross-origin",
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      siteName: "Aging at Home Advisor",
      title: "Aging at Home Advisor",
      description:
        "Clear, source-led guidance for safer bathrooms and aging at home.",
      url: siteUrl,
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Aging at Home Advisor — Clear guidance for a safer home." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Aging at Home Advisor",
      description:
        "Clear, source-led guidance for safer bathrooms and aging at home.",
      images: [socialImage],
    },
    icons: {
      icon: "/icon.png",
      apple: "/apple-touch-icon.png",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#164e52",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400..700&family=Source+Sans+3:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            name: "Aging at Home Advisor",
            url: siteUrl,
            email: "support@agingathomeadvisor.com",
            telephone: "+1-833-363-2420",
            legalName: "ROI PERFORMANCE LLC",
            address: {
              "@type": "PostalAddress",
              streetAddress: "13727 SW 152 Street #848",
              addressLocality: "Miami",
              addressRegion: "FL",
              postalCode: "33177",
              addressCountry: "US",
            },
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
