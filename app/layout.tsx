import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { CustomCursor } from "@/components/CustomCursor";
import { pageMetadata, SITE_URL } from "@/lib/seo";

/**
 * Self-hosted by next/font, so there is no render-blocking stylesheet
 * and no flash of unstyled text. Urbanist is the single family, per
 * DESIGN.md; tailwind's font-body is an alias of the same variable.
 */
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const TITLE = "Rahadian Maulana · Senior Product Designer";
const DESCRIPTION =
  "Senior Product Designer with 5+ years designing regulated fintech & banking products.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/" }),
};

/** Who the site is about, for search engines. Only facts the site already states. */
const PERSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rahadian Maulana",
  jobTitle: "Senior Product Designer",
  url: SITE_URL,
  email: "mailto:rahadianm22@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
  sameAs: [
    "https://www.linkedin.com/in/rahadianm22/",
    "https://dribbble.com/rahadianm22",
    "https://medium.com/@Rahadianm22",
    "https://www.instagram.com/rahadianonly/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the script below adds "js" to <html> before React hydrates.
    <html lang="en" className={urbanist.variable} suppressHydrationWarning>
      <head>
        {/* Entrance styles hide content only under .js, so nothing stays invisible without scripts. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased font-display bg-surface text-ink">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_LD) }}
        />
        {children}
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  );
}
