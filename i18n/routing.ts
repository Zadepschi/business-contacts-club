
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Languages supported by the website
  locales: ["en", "ru"],

  // English is the default language
  defaultLocale: "en",

  // English: /
  // Russian: /ru
  localePrefix: "as-needed",

  // Do not redirect based on browser language
  localeDetection: false,
});
