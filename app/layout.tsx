import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahadian Maulana — Senior Product Designer",
  description:
    "Senior Product Designer with 5+ years designing regulated fintech & banking products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts referenced directly by name in the section components
            (Space Grotesk, Inter, JetBrains Mono) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ backgroundColor: "#EDEFF5" }}>
        {children}
      </body>
    </html>
  );
}
