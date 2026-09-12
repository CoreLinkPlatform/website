import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://link.coreplatform.ir",
      lastModified: new Date("2026-09-12"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
