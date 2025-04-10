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
            href=""
          >
            Форум
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            className={styles.link}
            href=""
          >
            Калькуляторы
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            className={styles.link}
            href=""
          >
            Сотрудничество
          </Link>
        </li>
      </ul>
    </nav>
  );
}
