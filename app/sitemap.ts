
import type { MetadataRoute } from "next";

const siteUrl = "https://brooklynbusiness.club";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ENGLISH — Home
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

    // ENGLISH — Contact
    {
      url: `${siteUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${siteUrl}/contact`,
          ru: `${siteUrl}/ru/contact`,
        },
      },
    },

    // ENGLISH — Privacy Policy
    {
      url: `${siteUrl}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.4,
      alternates: {
        languages: {
          en: `${siteUrl}/privacy-policy`,
          ru: `${siteUrl}/ru/privacy-policy`,
        },
      },
    },

    // ENGLISH — Terms & Conditions
    {
      url: `${siteUrl}/terms-and-conditions`,
      changeFrequency: "yearly",
      priority: 0.4,
      alternates: {
        languages: {
          en: `${siteUrl}/terms-and-conditions`,
          ru: `${siteUrl}/ru/terms-and-conditions`,
        },
      },
    },

    // ENGLISH — Cookie Policy
    {
      url: `${siteUrl}/cookie-policy`,
      changeFrequency: "yearly",
      priority: 0.4,
      alternates: {
        languages: {
          en: `${siteUrl}/cookie-policy`,
          ru: `${siteUrl}/ru/cookie-policy`,
        },
      },
    },

    // ENGLISH — Community Guidelines
    {
      url: `${siteUrl}/community-guidelines`,
      changeFrequency: "yearly",
      priority: 0.4,
      alternates: {
        languages: {
          en: `${siteUrl}/community-guidelines`,
          ru: `${siteUrl}/ru/community-guidelines`,
        },
      },
    },

    // RUSSIAN — Home
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

    // RUSSIAN — Contact
    {
      url: `${siteUrl}/ru/contact`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${siteUrl}/contact`,
          ru: `${siteUrl}/ru/contact`,
        },
      },
    },

    // RUSSIAN — Privacy Policy
    {
      url: `${siteUrl}/ru/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          en: `${siteUrl}/privacy-policy`,
          ru: `${siteUrl}/ru/privacy-policy`,
        },
      },
    },

    // RUSSIAN — Terms & Conditions
    {
      url: `${siteUrl}/ru/terms-and-conditions`,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          en: `${siteUrl}/terms-and-conditions`,
          ru: `${siteUrl}/ru/terms-and-conditions`,
        },
      },
    },

    // RUSSIAN — Cookie Policy
    {
      url: `${siteUrl}/ru/cookie-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          en: `${siteUrl}/cookie-policy`,
          ru: `${siteUrl}/ru/cookie-policy`,
        },
      },
    },

    // RUSSIAN — Community Guidelines
    {
      url: `${siteUrl}/ru/community-guidelines`,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          en: `${siteUrl}/community-guidelines`,
          ru: `${siteUrl}/ru/community-guidelines`,
        },
      },
    },
  ];
}
