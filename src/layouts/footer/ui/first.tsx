import Link from "next/link";
import styles from "./first.module.css";

export default function First() {
  return (
    <nav className="container">
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} href="/page/postavshchikam">
            Поставщикам
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/category/uslugi">
            Услуги
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/page/contacts">
            Контакты
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="https://forum.investsteel.ru">
            Форум
          </Link>
        </li>
      </ul>
    </nav>
  );
}
