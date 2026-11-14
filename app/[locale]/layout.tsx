import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import { routing } from "@/i18n/routing";
import { SiteHeader } from "@/components/site-header/site-header";
import { SiteFooter } from "@/components/site-footer/site-footer";

import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ru")) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  return {
    metadataBase: new URL("https://brooklynbusiness.club"),

    title: {
      default: t("home.title"),
      template: "%s | Brooklyn Bridge",
    },

    description: t("home.description"),

    openGraph: {
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      siteName: "Brooklyn Bridge",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ru")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}