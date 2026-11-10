
import type { MetadataRoute } from "next";

const siteUrl = "https://brooklyn-bridge.us";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/join`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
