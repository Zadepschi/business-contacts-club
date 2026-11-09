
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          className={styles.brand}
          href="/"
          aria-label="Brooklyn Bridge — главная"
        >
          <Image
            src="/logo-bridge3.png"
            alt=""
            width={130}
            height={90}
            priority
            className={styles.logo}
          />

          <span className={styles.divider} />

          <span className={styles.brandName}>
            Brooklyn Bridge
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Основная навигация">
          <Link
            href="/"
            className={pathname === "/" ? styles.active : ""}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Главная
          </Link>

          <Link
            href="/about"
            className={pathname === "/about" ? styles.active : ""}
            aria-current={pathname === "/about" ? "page" : undefined}
          >
            О клубе
          </Link>

          <Link
            href="/join"
            className={pathname === "/join" ? styles.active : ""}
            aria-current={pathname === "/join" ? "page" : undefined}
          >
            Как вступить
          </Link>
        </nav>
      </div>
    </header>
  );
}
