import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";
import { SITE_URL } from "@/lib/seo";

/** Case studies come from the same list the site renders, so a new one is never left out. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, priority: 1 },
    { url: `${SITE_URL}/case-studies`, lastModified, priority: 0.8 },
    { url: `${SITE_URL}/experience`, lastModified, priority: 0.8 },
    { url: `${SITE_URL}/resume`, lastModified, priority: 0.8 },
    ...CASE_STUDIES.map((study) => ({ url: `${SITE_URL}${study.href}`, lastModified, priority: 0.7 })),
  ];
}
