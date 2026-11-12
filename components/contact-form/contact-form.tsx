
"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useTranslations } from "next-intl";
import styles from "./contact-form.module.css";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mppdzdwl");
  const t = useTranslations("Contact.form");

  if (state.succeeded) {
    return (
      <div className={styles.successMessage} role="status">
        <h3>{t("successTitle")}</h3>
        <p>{t("successText")}</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="contact-name">{t("name")}</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          required
        />
        <ValidationError
          prefix={t("name")}
          field="name"
          errors={state.errors}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email">{t("email")}</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
        <ValidationError
          prefix={t("email")}
          field="email"
          errors={state.errors}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-phone">{t("phone")}</label>
       <input
  id="contact-phone"
  type="tel"
  name="phone"
  autoComplete="tel"
/>
        <ValidationError
          prefix={t("phone")}
          field="phone"
          errors={state.errors}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">{t("message")}</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
        />
        <ValidationError
          prefix={t("message")}
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        className={styles.submitButton}
        type="submit"
        disabled={state.submitting}
      >
        {state.submitting ? t("sending") : t("submit")}
      </button>

      {state.errors && (
        <p className={styles.errorMessage} role="alert">
          {t("error")}
        </p>
      )}
    </form>
  );
}
