
import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header/site-header";
import { SiteFooter } from "@/components/site-footer/site-footer";

const siteUrl = "https://brooklyn-bridge.us";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Brooklyn Bridge — Клуб деловых контактов",
    template: "%s | Brooklyn Bridge",
  },

  description:
  "Brooklyn Bridge — русскоязычный клуб деловых контактов для предпринимателей Нью-Йорка. Новые знакомства, обмен опытом и возможности для сотрудничества.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Brooklyn Bridge",
    title: "Brooklyn Bridge — Клуб деловых контактов",
    description:
      "Сообщество предпринимателей для живого общения, новых знакомств и деловых партнёрств.",
    url: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
