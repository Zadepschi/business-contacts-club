
import Link from "next/link";
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

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroShade} />

        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>
            Сообщество предпринимателей
          </p>

          <h1>
            Клуб деловых
            <br />
            контактов
          </h1>

          <p className={styles.heroLead}>
            Знакомимся, обмениваемся опытом и создаём партнёрства —
            в деловой среде и за её пределами.
          </p>

          <div className={styles.actions}>
            <Link
              className={`${styles.button} ${styles.buttonGold}`}
              href="/about"
            >
              Узнать о клубе <ArrowUpRight />
            </Link>

            <a
              className={`${styles.button} ${styles.buttonOutline}`}
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Группа в Facebook <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className={styles.heroNote}>
          Живое общение. Настоящие знакомства.
        </div>
      </section>

      <section className={styles.introStrip}>
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>
              <ArrowUpRight />
            </span>
            <strong>Новые знакомства</strong>
            <small>Расширяем круг деловых контактов</small>
          </div>

          <div className={styles.feature}>
            <span className={styles.featureIcon}>◇</span>
            <strong>Обмен опытом</strong>
            <small>Делимся взглядами и идеями</small>
          </div>

          <div className={styles.feature}>
            <span className={styles.featureIcon}>∞</span>
            <strong>Партнёрства</strong>
            <small>Находим возможности для сотрудничества</small>
          </div>
        </div>
      </section>

      <section className={styles.homeMeetups}>
        <div className={`container ${styles.homeMeetupsInner}`}>
          <div className={styles.meetupsContent}>
            <p className={styles.eyebrow}>
              Встречаемся раз в месяц
            </p>

            <h2>
              Бизнес объединяет.
              <br />
              Общение сближает.
            </h2>

            <p className={styles.meetupsText}>
              Ужины в ресторанах, баня, спорт и поездки за город —
              выбираем формат, в котором приятно знакомиться
              и проводить время вместе.
            </p>

            <Link
              className={styles.textLink}
              href="/about"
            >
              Больше о наших встречах <ArrowRight />
            </Link>
          </div>

          <div className={styles.meetupTags}>
            <span>Ужины</span>
            <span>Баня</span>
            <span>Спорт</span>
            <span>Выезды</span>
          </div>
        </div>
      </section>
    </>
  );
}
