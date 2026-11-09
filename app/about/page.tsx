
import Link from "next/link";
import styles from "./page.module.css";

const activities = [
  {
    title: "Ужины в ресторанах",
    text: "Встречаемся за общим столом и знакомимся в непринуждённой атмосфере.",
    image: "dinner",
  },
  {
    title: "Баня и отдых",
    text: "Общаемся вне привычной деловой обстановки.",
    image: "sauna",
  },
  {
    title: "Спортивные мероприятия",
    text: "Проводим время активно и поддерживаем интерес друг к другу.",
    image: "sport",
  },
  {
    title: "Выезды за город",
    text: "Меняем обстановку, отдыхаем и продолжаем знакомиться.",
    image: "outdoor",
  },
];

const activityImageStyles: Record<string, string> = {
  dinner: styles.activityDinner,
  sauna: styles.activitySauna,
  sport: styles.activitySport,
  outdoor: styles.activityOutdoor,
};

export default function AboutPage() {
  return (
    <div className={styles.pageShell}>
      <section className={`container ${styles.pageHeading}`}>
        <p className="eyebrow">Кто мы и что делаем</p>
        <h1>О клубе</h1>
        <p className={styles.pageLead}>
          Клуб деловых контактов — сообщество предпринимателей, где знакомятся
          с новыми людьми, обсуждают актуальные темы и находят возможности для
          сотрудничества.
        </p>
      </section>

      <section className={`container ${styles.activitySection}`}>
        <div className={styles.sectionHeading}>
          <div>
            <p className="eyebrow">Встречаемся раз в месяц</p>
            <h2>Что мы делаем</h2>
          </div>
          <p>
            Собираемся в неформальной обстановке — без лекций, обязательной
            программы и формальностей.
          </p>
        </div>

        <div className={styles.activityGrid}>
          {activities.map((item, index) => (
            <article
              className={`${styles.activityCard} ${activityImageStyles[item.image]}`}
              key={item.title}
            >
              <div className={styles.activityNumber}>0{index + 1}</div>
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
          <span className={styles.noteMark}>“</span>
          <p>
            Мы не проводим обучение бизнесу и не организуем встречи с менторами.
            Это не бизнес-клуб, а клуб деловых контактов.
          </p>
        </div>
      </section>

      <section className={`container ${styles.simpleCta}`}>
        <div>
          <h2>Вам близок такой формат?</h2>
          <p>Познакомьтесь с условиями вступления.</p>
        </div>
        <Link className="button button--dark" href="/join">
          Как вступить <span>→</span>
        </Link>
      </section>
    </div>
  );
}
