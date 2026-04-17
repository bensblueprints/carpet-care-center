import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://carpetcare.advancedmarketing.co";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];
}
