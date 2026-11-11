
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import styles from "./siteFooter.module.css";

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

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const header = await getTranslations("Header");
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <Link
              href="/"
              className={styles.logoLink}
              aria-label={header("homeLabel")}
            >
              <Image
                src="/logo-bridge3.png"
                alt=""
                width={64}
                height={64}
                className={styles.logo}
              />
              <span className={styles.divider} />
              <span className={styles.brandName}>
                Brooklyn Bridge
              </span>
            </Link>

            <p className={styles.description}>
              {t("description")}
            </p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>
              {t("navigation")}
            </h3>
            <Link href="/">{header("home")}</Link>
            <Link href="/about">{header("about")}</Link>
            <Link href="/join">{header("join")}</Link>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>
              {t("community")}
            </h3>
            <p>{t("tagline")}</p>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.facebook}
            >
              {t("facebook")} <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {currentYear} Brooklyn Bridge. {t("copyright")}
          </span>
          <span className={styles.tagline}>
            {t("bottomTagline")}
          </span>
        </div>
      </div>
    </footer>
  );
}
