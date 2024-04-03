import Link from "next/link";
import styles from "./top-header-menu.module.css";

export function TopHeaderMenu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={`${styles.link}`} href="/page/services">
            Услуги
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={`${styles.link}`} href="/page/contacts">
            Контакты
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={`${styles.link}`} href="/page/about">
            О нас
          </Link>
        </li>
      </ul>
    </nav>
  );
}
