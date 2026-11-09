import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header/site-header";
import { SiteFooter } from "@/components/site-footer/site-footer";

export const metadata: Metadata = {
  title: "Клуб деловых контактов",
  description:
    "Сообщество предпринимателей для знакомств, обмена опытом и деловых партнёрств.",
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
