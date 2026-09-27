import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { CustomCursor } from "@/components/CustomCursor";

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

const SITE_URL = "https://rahadianm22.my.id";
const TITLE = "Rahadian Maulana · Senior Product Designer";
const DESCRIPTION =
  "Senior Product Designer with 5+ years designing regulated fintech & banking products.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Rahadian Maulana Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased font-display bg-surface text-ink">
        {children}
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  );
}
