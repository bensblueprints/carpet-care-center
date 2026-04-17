import type { MetadataRoute } from "next";
import { SERVICES, CITIES } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://carpetcare.advancedmarketing.co";
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
  ];

  for (const s of SERVICES) {
    entries.push({
      url: `${base}/services/${s.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  for (const c of CITIES) {
    entries.push({
      url: `${base}/service-area/${c.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  for (const s of SERVICES) {
    for (const c of CITIES) {
      entries.push({
        url: `${base}/services/${s.slug}/${c.slug}/`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
