import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://corelinkplatform.ir",
      lastModified: new Date("2026-08-06"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
