import Link from "next/link";
import styles from "./second.module.css";
import clsx from "clsx";

export default function Second() {
  return (
    <div className={clsx(styles.root, "container")}>
      <div className={styles.col}>
        <div className={styles.soclist}>
          <a
            className={styles.soclink}
            target="_blank"
            href="https://t.me/investsteelinc"
          >
            Telegram
          </a>
          <a
            className={styles.soclink}
            target="_blank"
            href="https://vk.com/investsteelru"
          >
            VKontakte
          </a>
          <a
            className={styles.soclink}
            target="_blank"
            href="https://dzen.ru/investsteel"
          >
            Дзен
          </a>
        </div>
        <div className={styles.copyright}>
          <span>© INVESTSTEEL 2023 - {new Date().getFullYear()}</span>
          <br />
          <Link href="https://rosdesk.ru/">Powered by RosDesk</Link>
        </div>
      </div>
      <div className={styles.col}>
        <Link href="/page/confidential">Политика конфидециальности</Link>
        <div className={styles.text}>
          Обращаем Ваше внимание на то, что данный интернет-сайт носит
          исключительно информационный характер и ни при каких условиях не
          является публичной офертой, определяемой положениями Статьи 437
          Гражданского кодекса Российской Федерации.
        </div>
      </div>
    </div>
  );
}
