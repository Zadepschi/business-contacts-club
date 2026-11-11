
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import styles from "./page.module.css";

const facebookUrl =
  process.env.NEXT_PUBLIC_FACEBOOK_GROUP_URL ||
  "https://www.facebook.com/groups/1549833390202202";

function ArrowUpRight() {
  return (
    <svg
      className={styles.arrowIcon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 19L19 5M8 5H19V16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      className={styles.arrowIcon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12H20M13 5L20 12L13 19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ru")) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  const title = t("home.title");
  const description = t("home.description");

  const canonical = locale === "en" ? "/" : "/ru";

  return {
    title,
    description,

    alternates: {
      canonical,
      languages: {
        en: "/",
        ru: "/ru",
      },
    },

    openGraph: {
      type: "website",
      siteName: "Brooklyn Bridge",
      title,
      description,
      locale: locale === "ru" ? "ru_RU" : "en_US",
      url: canonical,
    },
  };
}

export default async function HomePage() {
  const t = await getTranslations("Home");

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroShade} />

        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>
            {t("eyebrow")}
          </p>

          <h1>
            {t("title")}
          </h1>

          <p className={styles.heroLead}>
            {t("lead")}
          </p>

          <div className={styles.actions}>
            <Link
              className={`${styles.button} ${styles.buttonGold}`}
              href="/about"
            >
              {t("aboutButton")} <ArrowUpRight />
            </Link>

            <a
              className={`${styles.button} ${styles.buttonOutline}`}
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("facebookButton")} <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className={styles.heroNote}>
          {t("heroNote")}
        </div>
      </section>

      <section className={styles.introStrip}>
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>
              <ArrowUpRight />
            </span>
            <strong>{t("features.connections.title")}</strong>
            <small>{t("features.connections.text")}</small>
          </div>

          <div className={styles.feature}>
            <span className={styles.featureIcon}>◇</span>
            <strong>{t("features.experience.title")}</strong>
            <small>{t("features.experience.text")}</small>
          </div>

          <div className={styles.feature}>
            <span className={styles.featureIcon}>∞</span>
            <strong>{t("features.partnerships.title")}</strong>
            <small>{t("features.partnerships.text")}</small>
          </div>
        </div>
      </section>

      <section className={styles.homeMeetups}>
        <div className={`container ${styles.homeMeetupsInner}`}>
          <div className={styles.meetupsContent}>
            <p className={styles.eyebrow}>
              {t("meetups.eyebrow")}
            </p>

            <h2>
              {t("meetups.title")}
            </h2>

            <p className={styles.meetupsText}>
              {t("meetups.text")}
            </p>

            <Link
              className={styles.textLink}
              href="/about"
            >
              {t("meetups.link")} <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
