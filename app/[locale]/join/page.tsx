
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ locale: string }>;
};

const facebookUrl =
  process.env.NEXT_PUBLIC_FACEBOOK_GROUP_URL ||
  "https://www.facebook.com/groups/1549833390202202";

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("join.title"),
    description: t("join.description"),
    alternates: {
      canonical: locale === "en" ? "/join" : `/${locale}/join`,
    },
    openGraph: {
      title: t("join.title"),
      description: t("join.description"),
      url: locale === "en" ? "/join" : `/${locale}/join`,
    },
  };
}

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

export default async function JoinPage() {
  const t = await getTranslations("Join");

  const steps = t.raw("steps") as {
    title: string;
    text: string;
  }[];

  const rules = t.raw("rules.items") as string[];

  return (
    <div className={`${styles.pageShell} ${styles.joinPage}`}>
      <section className={`container ${styles.pageHeading}`}>
        <p className="eyebrow">{t("eyebrow")}</p>
        <h1>{t("title")}</h1>
        <p className={styles.pageLead}>{t("lead")}</p>
      </section>

      <section className={`container ${styles.joinSteps}`}>
        {steps.map((step, index) => (
          <article className={styles.joinStep} key={index}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className={`container ${styles.rulesPanel}`}>
        <div>
          <p className="eyebrow">{t("rules.eyebrow")}</p>
          <h2>{t("rules.title")}</h2>
        </div>

        <ul>
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </section>

      <section className={styles.joinCta}>
        <div className={`container ${styles.joinCtaInner}`}>
          <p className="eyebrow eyebrow--light">
            {t("cta.eyebrow")}
          </p>

          <h2>{t("cta.title")}</h2>

          <p>{t("cta.text")}</p>

          <a
            className={`button button--gold ${styles.shimmerButton}`}
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.shimmerText}>
              {t("cta.button")}
              <ArrowUpRight />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
