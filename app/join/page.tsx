import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Как вступить в клуб деловых контактов",
  description:
    "Узнайте, как присоединиться к Brooklyn Bridge — русскоязычному клубу деловых контактов для предпринимателей Нью-Йорка. Личное знакомство, участие в мероприятиях и общение с предпринимателями.",
  alternates: {
    canonical: "/join",
  },
  openGraph: {
    title: "Как вступить | Brooklyn Bridge",
    description:
      "Узнайте, как стать участником Brooklyn Bridge — клуба деловых контактов для русскоязычных предпринимателей.",
    url: "/join",
  },
};

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

export default function JoinPage() {
  return (
    <div className={`${styles.pageShell} ${styles.joinPage}`}>
      <section className={`container ${styles.pageHeading}`}>
        <p className="eyebrow">Присоединиться к сообществу</p>
        <h1>Как вступить</h1>
        <p className={styles.pageLead}>
          В клуб принимаются предприниматели с действующим бизнесом. Приём
          проходит после личного знакомства — так мы сохраняем качество
          окружения и понимаем, что вам будет интересно среди участников.
        </p>
      </section>

      <section className={`container ${styles.joinSteps}`}>
        <article className={styles.joinStep}>
          <span>01</span>
          <div>
            <h2>Личное знакомство</h2>
            <p>Свяжитесь с организатором и договоритесь о встрече.</p>
          </div>
        </article>

        <article className={styles.joinStep}>
          <span>02</span>
          <div>
            <h2>Расскажите о себе</h2>
            <p>Познакомимся, узнаем о вашем бизнесе и интересах.</p>
          </div>
        </article>

        <article className={styles.joinStep}>
          <span>03</span>
          <div>
            <h2>Присоединяйтесь</h2>
            <p>
              После знакомства вы сможете стать участником клуба и нашей
              Facebook-группы.
            </p>
          </div>
        </article>
      </section>

      <section className={`container ${styles.rulesPanel}`}>
        <div>
          <p className="eyebrow">Просто и прозрачно</p>
          <h2>Правила клуба</h2>
        </div>

        <ul>
          <li>Участие в клубе бесплатное.</li>
          <li>
            Каждый участник самостоятельно оплачивает свои расходы на
            мероприятиях.
          </li>
          <li>Запрещены продажи товаров и навязчивая реклама внутри клуба.</li>
          <li>
            Мы уважаем друг друга и не допускаем грубого или неуважительного
            отношения.
          </li>
        </ul>
      </section>

      <section className={styles.joinCta}>
        <div className={`container ${styles.joinCtaInner}`}>
          <p className="eyebrow eyebrow--light">Будем знакомы</p>
          <h2>
            Хорошие связи начинаются
            <br />
            с простого знакомства.
          </h2>
          <p>Присоединяйтесь к нашему сообществу в Facebook.</p>

          <a
            className={`button button--gold ${styles.shimmerButton}`}
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.shimmerText}>
              Перейти в группу Facebook
              <ArrowUpRight />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
