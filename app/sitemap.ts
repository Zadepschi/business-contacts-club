import type { MetadataRoute } from "next";

const siteUrl = "https://brooklyn-bridge.us";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ENGLISH — главная
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: siteUrl,
          ru: `${siteUrl}/ru`,
        },
      },
    },

    // ENGLISH — About
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${siteUrl}/about`,
          ru: `${siteUrl}/ru/about`,
        },
      },
    },

    // ENGLISH — Join
    {
      url: `${siteUrl}/join`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${siteUrl}/join`,
          ru: `${siteUrl}/ru/join`,
        },
      },
    },

    // RUSSIAN — главная
    {
      url: `${siteUrl}/ru`,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: siteUrl,
          ru: `${siteUrl}/ru`,
        },
      },
    },

    // RUSSIAN — About
    {
      url: `${siteUrl}/ru/about`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${siteUrl}/about`,
          ru: `${siteUrl}/ru/about`,
        },
      },
    },

    // RUSSIAN — Join
    {
      url: `${siteUrl}/ru/join`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${siteUrl}/join`,
          ru: `${siteUrl}/ru/join`,
        },
      },
    },
  ];
}