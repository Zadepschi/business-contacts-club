
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("about.title"),
    description: t("about.description"),
    alternates: {
      canonical: locale === "en" ? "/about" : `/${locale}/about`,
    },
    openGraph: {
      title: t("about.title"),
      description: t("about.description"),
      url: locale === "en" ? "/about" : `/${locale}/about`,
    },
  };
}

const activityImageStyles: Record<string, string> = {
  dinner: styles.activityDinner,
  sauna: styles.activitySauna,
  sport: styles.activitySport,
  outdoor: styles.activityOutdoor,
};

export default async function AboutPage() {
  const t = await getTranslations("About");

  const activities = t.raw("activities.items") as {
    title: string;
    text: string;
  }[];

  const imageKeys = ["dinner", "sauna", "sport", "outdoor"];

  return (
    <div className={styles.pageShell}>
      <section className={`container ${styles.pageHeading}`}>
        <h1>{t("title")}</h1>
        <p className={styles.pageLead}>{t("lead")}</p>
      </section>

      <section className={`container ${styles.activitySection}`}>
        <div className={styles.sectionHeading}>
          <div>
            <h2>{t("activities.title")}</h2>
          </div>
          <p>{t("activities.description")}</p>
        </div>

        <div className={styles.activityGrid}>
          {activities.map((item, index) => (
            <article
              className={`${styles.activityCard} ${
                activityImageStyles[imageKeys[index]]
              }`}
              key={imageKeys[index]}
            >
              <div className={styles.activityNumber}>
                0{index + 1}
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.noteBand}>
        <div className={`container ${styles.noteBandInner}`}>
  <span className={styles.noteMark} aria-hidden="true">“</span>
  <p>
    {t("note")}
    <span className={styles.closingQuote} aria-hidden="true">”</span>
  </p>
</div>
      </section>

      <section className={`container ${styles.simpleCta}`}>
        <div>
          <h2>{t("cta.title")}</h2>
          <p>{t("cta.text")}</p>
        </div>
        <Link className="button button--dark" href="/join">
          {t("cta.button")} <span>→</span>
        </Link>
      </section>
    </div>
  );
}
