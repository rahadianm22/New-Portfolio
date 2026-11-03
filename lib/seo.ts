import type { Metadata } from "next";

export const SITE_URL = "https://rahadianm22.my.id";
export const SITE_NAME = "Rahadian Maulana Portfolio";

const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Rahadian Maulana, Senior Product Designer",
};

/**
 * Next merges `openGraph` shallowly: a page that sets only `title` keeps the
 * layout's og:title and og:url, so every shared link previewed as the
 * homepage. Each page builds its full set here instead.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image"],
    },
  };
}
