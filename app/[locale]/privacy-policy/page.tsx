
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import styles from "./page.module.css";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

type PolicySection = {
  title: string;
  paragraphs: string[];
};

const siteUrl = "https://brooklynbusiness.club";

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  const isRussian = locale === "ru";

  const title = isRussian
    ? "Политика конфиденциальности | Brooklyn Business Club"
    : "Privacy Policy | Brooklyn Business Club";

  const description = isRussian
    ? "Политика конфиденциальности Brooklyn Business Club. Информация о сборе, использовании и защите персональных данных."
    : "Brooklyn Business Club Privacy Policy. Learn how we collect, use, and protect personal information.";

  const canonicalUrl = isRussian
    ? `${siteUrl}/ru/privacy-policy`
    : `${siteUrl}/privacy-policy`;

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${siteUrl}/privacy-policy`,
        ru: `${siteUrl}/ru/privacy-policy`,
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

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;

  const t = await getTranslations("PrivacyPolicy");

  const sections = t.raw("sections") as PolicySection[];

  return (
    <div className={styles.pageShell}>
      {/* PAGE HEADING */}
      <header className={styles.pageHeading}>
        <p className={styles.eyebrow}>
          Brooklyn Business Club
        </p>

        <h1>{t("title")}</h1>

        <p className={styles.updated}>
          {t("lastUpdated")}
        </p>
      </header>

      {/* POLICY CONTENT */}
      <div className={styles.contentWrapper}>
        <article className={styles.policyContent}>
          <div className={styles.introduction}>
            <p className={styles.sectionEyebrow}>
              {t("introductionLabel")}
            </p>

            <p>{t("introduction")}</p>
          </div>

          <div className={styles.sections}>
            {sections.map((section, index) => (
              <section
                className={styles.policySection}
                key={`${index}-${section.title}`}
              >
                <h2>
                  <span className={styles.sectionNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {section.title}
                </h2>

                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* CONTACT INFORMATION */}
          <section className={styles.contactPanel}>
            <p className={styles.sectionEyebrow}>
              {t("contactEyebrow")}
            </p>

            <h2>{t("contactTitle")}</h2>

            <p>{t("contactDescription")}</p>

            <div className={styles.contactDetails}>
              <div>
                <span>{t("organizationLabel")}</span>
                <strong>Brooklyn Business Club</strong>
              </div>

              <div>
                <span>{t("locationLabel")}</span>
                <strong>Brooklyn, New York, USA</strong>
              </div>

              <div>
                <span>{t("phoneLabel")}</span>
                <a href="tel:+16466067303">
                  +1 (646) 606-7303
                </a>
              </div>
            </div>
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
