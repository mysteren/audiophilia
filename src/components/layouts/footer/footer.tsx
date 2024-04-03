// Styles
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  // const

  return (
    <footer>
      <div className={styles.footerFirst}>
        <div className="container">
          <ul className={styles.footerFirstList}>
            <li>
              <Link className={styles.footerFirstLink} href="/category">
                Каталог
              </Link>
            </li>
            <li>
              <Link className={styles.footerFirstLink} href="/page/services">
                Услуги
              </Link>
            </li>
            <li>
              <Link className={styles.footerFirstLink} href="/page/contacts">
                Контакты
              </Link>
            </li>
            <li>
              <Link className={styles.footerFirstLink} href="/page/about">
                О Нас
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerSecond}>
        <div className="container">
          <div className={styles.footerSecondGrid}>
            <div className={styles.footerSecondUnderBlock}>
              <p className={styles.footerSecondTextWhite}>
                © INVESTSTEEL 2023 - {new Date().getFullYear()}
              </p>
              <div className={styles.footerSecondFlexBetween}>
                <Link
                  className={styles.footerSecondLinkBottom}
                  href="/page/confidential"
                >
                  Политика конфидециальности
                </Link>
                <Link
                  className={styles.footerSecondLinkBottom}
                  href="/page/about"
                >
                  Пользовательское соглашение
                </Link>
              </div>
            </div>
            <div>
              <p className={styles.footerSecondText}>
                Обращаем Ваше внимание на то, что данный интернет-сайт носит
                исключительно информационный характер и ни при каких условиях не
                является публичной офертой, определяемой положениями Статьи 437
                Гражданского кодекса Российской Федерации.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
