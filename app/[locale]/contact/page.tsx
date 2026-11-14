
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/contact-form/contact-form";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ locale: string }>;
};

const phone = "+16466067303";

const socialLinks = {
  telegram: "https://t.me/falcon1633",
  whatsapp: "https://wa.me/16466067303",
  facebook: "https://www.facebook.com/groups/1549833390202202",
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("contact.title"),
    description: t("contact.description"),
    alternates: {
      canonical: locale === "en" ? "/contact" : `/${locale}/contact`,
    },
    openGraph: {
      title: t("contact.title"),
      description: t("contact.description"),
      url: locale === "en" ? "/contact" : `/${locale}/contact`,
    },
  };
}

function ContactIcon({ type }: { type: "phone" | "location" }) {
  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 3.5 10 3l2 4.5-2.2 1.8a15 15 0 0 0 4.9 4.9l1.8-2.2 4.5 2-.5 3c-.2 1.1-1.2 1.9-2.3 1.8C10.7 18 6 13.3 5.2 5.8 5.1 4.7 5.9 3.7 7 3.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 10c0 5.2-8 12-8 12S4 15.2 4 10a8 8 0 1 1 16 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="10"
        r="2.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function SocialIcon({ type }: { type: "telegram" | "whatsapp" | "facebook" }) {
  if (type === "telegram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="m21.5 3.5-3.2 17c-.2 1.2-.9 1.5-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L5.7 13.9.8 12.4c-1.1-.3-1.1-1.1.2-1.6L20 3.4c.9-.3 1.7.2 1.5 1.1Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M20.4 3.6A11.8 11.8 0 0 0 1.8 17.8L.5 23.5l5.8-1.3A11.8 11.8 0 0 0 20.4 3.6ZM12 21a9.7 9.7 0 0 1-5-1.4l-.4-.2-3.4.8.9-3.3-.3-.5A9.7 9.7 0 1 1 12 21Zm5.3-7.3c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.2-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.8 1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.8 5.1.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default async function ContactPage() {
  const t = await getTranslations("Contact");

  return (
    <main className={styles.pageShell}>
      <section className={styles.pageHeading}>
        <h1>{t("title")}</h1>
        <p>{t("lead")}</p>
      </section>

      <section className={`container ${styles.contactGrid}`}>
        <div className={styles.contactDetails}>
          <p className={styles.sectionEyebrow}>{t("details.eyebrow")}</p>
          <h2>{t("details.title")}</h2>

          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>
              <ContactIcon type="phone" />
            </span>
            <div>
              <span className={styles.itemLabel}>{t("details.phone")}</span>
              <a href={`tel:${phone}`}>+1 (646) 606-7303</a>
            </div>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>
              <ContactIcon type="location" />
            </span>
            <div>
              <span className={styles.itemLabel}>{t("details.location")}</span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Brooklyn%2C+New+York"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brooklyn, New York
              </a>
            </div>
          </div>

          <div className={styles.socialSection}>
            <p className={styles.socialTitle}>CONNECT WITH US</p>

           <div className={styles.socialLinks}>
  <a
    href={socialLinks.facebook}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    title="Facebook"
  >
    <SocialIcon type="facebook" />
  </a>

  <a
    href={socialLinks.telegram}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Telegram"
    title="Telegram"
  >
    <SocialIcon type="telegram" />
  </a>

  <a
    href={socialLinks.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    title="WhatsApp"
  >
    <SocialIcon type="whatsapp" />
  </a>
</div>
          </div>
        </div>

        <div className={styles.formPanel}>
          <p className={styles.sectionEyebrow}>{t("form.eyebrow")}</p>
          <h2>{t("form.title")}</h2>
          <p className={styles.formLead}>{t("form.lead")}</p>
          <ContactForm />
        </div>
      </section>

     
{/* Декоративный золотой контур Бруклинского моста */}
<div className={styles.bridgeArtwork} aria-hidden="true">
  <img
    src="/brooklyn_manhattan_gold.svg"
    alt=""
  />
</div>

    </main>
  );
}
