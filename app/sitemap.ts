import type { MetadataRoute } from "next";

const SITE_URL = "https://rahadianm22.my.id";

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
    {
      url: `${SITE_URL}/case-studies`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/case-studies/natuna-digilab`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/case-studies/brispot`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/case-studies/bsi`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/case-studies/youtube-download`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/case-studies/card-delivery-status`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
