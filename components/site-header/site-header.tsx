
"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Header");

  const nextLocale = locale === "en" ? "ru" : "en";
  const languageLabel = locale === "en" ? "RU" : "EN";

  const languageSwitcher = (
    <Link
      href={pathname}
      locale={nextLocale}
      className={styles.languageToggle}
      aria-label={
        locale === "en"
          ? "Switch to Russian"
          : "Switch to English"
      }
    >
      {languageLabel}
    </Link>
  );

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brandRow}>
          <Link
            className={styles.brand}
            href="/"
            aria-label={t("homeLabel")}
          >
            <Image
              src="/logo-club.png"
              alt=""
              width={130}
              height={90}
              priority
              className={styles.logo}
            />

            <span className={styles.divider} />

<Image
  src="/BrooklynClub.png"
  alt="Brooklyn Bridge Business Networking Club"
  width={260}
  height={80}
  priority
  className={styles.networkLogo}
/>
          </Link>

          <div className={styles.mobileLanguageSwitcher}>
            {languageSwitcher}
          </div>
        </div>

        <nav
          className={styles.nav}
          aria-label={t("navigationLabel")}
        >
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

          <Link
            href="/contact"
            className={pathname === "/contact" ? styles.active : ""}
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            {t("contact")}
          </Link>

          <div className={styles.desktopLanguageSwitcher}>
            {languageSwitcher}
          </div>
        </nav>
      </div>
    </header>
  );
}
