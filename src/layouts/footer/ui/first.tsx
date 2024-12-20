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
          <Link
            target="_blank"
            className={styles.link}
            href="https://forum.investsteel.ru"
          >
            Форум
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            className={styles.link}
            href="https://tools.investsteel.ru/"
          >
            Калькуляторы
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            className={styles.link}
            href="https://corp.investsteel.ru"
          >
            Сотрудничество
          </Link>
        </li>
      </ul>
    </nav>
  );
}
