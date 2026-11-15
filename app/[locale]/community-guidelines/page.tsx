
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://brooklynbusiness.club";

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  const isRussian = locale === "ru";

  const title = isRussian
    ? "Правила сообщества | Brooklyn Business Club"
    : "Community Guidelines | Brooklyn Business Club";

  const description = isRussian
    ? "Ознакомьтесь с правилами общения и участия в Brooklyn Business Club. Принципы уважительного общения, профессионального взаимодействия и сотрудничества."
    : "Learn about the community standards of Brooklyn Business Club, including respectful communication, professional interaction, and collaboration.";

  const canonicalUrl = isRussian
    ? `${siteUrl}/ru/community-guidelines`
    : `${siteUrl}/community-guidelines`;

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${siteUrl}/community-guidelines`,
        ru: `${siteUrl}/ru/community-guidelines`,
      },
    },

    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: "Brooklyn Business Club",
      title,
      description,
      locale: isRussian ? "ru_RU" : "en_US",
      alternateLocale: isRussian ? ["en_US"] : ["ru_RU"],
    },

    twitter: {
      card: "summary",
      title,
      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CommunityGuidelinesPage({
  params,
}: Props) {
  const { locale } = await params;

  const t = await getTranslations("CommunityGuidelines");

  const sections = t.raw("sections") as {
    title: string;
    paragraphs: string[];
  }[];

  return (
    <div className={styles.pageShell}>
      <header className={styles.pageHeading}>
        <p className={styles.eyebrow}>
          Brooklyn Business Club
        </p>

        <h1>{t("title")}</h1>

        <p className={styles.updated}>
          {t("lastUpdated")}
        </p>
      </header>

      <div className={styles.container}>
        <article className={styles.content}>
          <p className={styles.intro}>
            {t("introduction")}
          </p>

          <div className={styles.sections}>
            {sections.map((section, index) => (
              <section
                className={styles.section}
                key={index}
              >
                <h2>{section.title}</h2>

                {section.paragraphs.map(
                  (paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>
                      {paragraph}
                    </p>
                  )
                )}
              </section>
            ))}
          </div>

          <section className={styles.contact}>
            <p className={styles.contactEyebrow}>
              {t("contactTitle")}
            </p>

            <p>{t("contactDescription")}</p>

            <p className={styles.organization}>
              <strong>Brooklyn Business Club</strong>
              <span>Brooklyn, New York, USA</span>
            </p>

            <p className={styles.phone}>
              <strong>{t("phoneLabel")}: </strong>
              <a href="tel:+16466067303">
                +1 (646) 606-7303
              </a>
            </p>
          </section>

          <div className={styles.backLink}>
            <Link href="/">
              {locale === "ru"
                ? "Вернуться на главную"
                : "Back to Home"}
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
