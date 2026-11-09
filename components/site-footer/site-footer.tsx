
import Link from "next/link";
import Image from "next/image";
import styles from "./siteFooter.module.css";

const facebookUrl =
  process.env.NEXT_PUBLIC_FACEBOOK_GROUP_URL ||
  "https://www.facebook.com/groups/1549833390202202";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <Link
              href="/"
              className={styles.logoLink}
              aria-label="Brooklyn Bridge — главная"
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
              Клуб деловых контактов.
              Некоммерческое сообщество предпринимателей,
              объединённых общением и взаимной поддержкой.
            </p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>Навигация</h3>
            <Link href="/">Главная</Link>
            <Link href="/about">О клубе</Link>
            <Link href="/join">Как вступить</Link>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>Наше сообщество</h3>
            <p>
              Живое общение. Настоящие знакомства.
            </p>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.facebook}
            >
              Мы в Facebook <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {currentYear} Brooklyn Bridge. Все права защищены.
          </span>
          <span className={styles.tagline}>
            Объединяем людей. Создаём возможности.
          </span>
        </div>
      </div>
    </footer>
  );
}
