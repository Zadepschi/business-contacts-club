"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Header");

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          className={styles.brand}
          href="/"
          aria-label={t("homeLabel")}
        >
          <Image
            src="/logo-bridge3.png"
            alt=""
            width={130}
            height={90}
            priority
            className={styles.logo}
          />

          <span className={styles.divider} />

          <span className={styles.brandName}>
            Brooklyn Bridge
          </span>
        </Link>

        <nav className={styles.nav} aria-label={t("navigationLabel")}>
          <Link
            href="/"
            className={pathname === "/" ? styles.active : ""}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            {t("home")}
          </Link>

          <Link
            href="/about"
            className={pathname === "/about" ? styles.active : ""}
            aria-current={pathname === "/about" ? "page" : undefined}
          >
            {t("about")}
          </Link>

          <Link
            href="/join"
            className={pathname === "/join" ? styles.active : ""}
            aria-current={pathname === "/join" ? "page" : undefined}
          >
            {t("join")}
          </Link>

          <span className={styles.languageSwitcher}>
            <Link
              href={pathname}
              locale="en"
              className={locale === "en" ? styles.languageActive : ""}
              aria-current={locale === "en" ? "page" : undefined}
            >
              EN
            </Link>

            <span aria-hidden="true">|</span>

            <Link
              href={pathname}
              locale="ru"
              className={locale === "ru" ? styles.languageActive : ""}
              aria-current={locale === "ru" ? "page" : undefined}
            >
              RU
            </Link>
          </span>
        </nav>
      </div>
    </header>
  );
}