import type { MetadataRoute } from "next";

const SITE_URL = "https://rahadianm22.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${SITE_URL}/experience`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/resume`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
