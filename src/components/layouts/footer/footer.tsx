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
              <Link className={styles.footerFirstLink} href="/category/avtotovary">
                Автотовары
              </Link>
            </li>
            <li>
              <Link className={styles.footerFirstLink} href="/category/transport">
                Транспорт
              </Link>
            </li>
            <li>
              <Link className={styles.footerFirstLink} href="/page/services">
                Услуги
              </Link>
            </li>
            <li>
              <Link className={styles.footerFirstLink} href="/page/dealers">
                Дилерам
              </Link>
            </li>
          </ul>

          {/* <div className={styles.footerSecondBlock}>
            <div className={styles.footerSecondUnderBlock}>
              <div className={styles.footerSecondBlockText}>
                <p className={styles.footerSecondTitle}>Каталог авто</p>
                <a className={styles.footerSecondLink} href="">
                  Подробнее
                </a>
              </div>
              <div className={styles.footerSecondBlockAuto}>
                <ul className={styles.footerBlockList}>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      1
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      2
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      3
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      4
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      5
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      6
                    </a>
                  </li>
                </ul>
                <ul className={styles.footerBlockList}>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      1
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      2
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      3
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      4
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      5
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      6
                    </a>
                  </li>
                </ul>
                <ul className={styles.footerBlockList}>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      1
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      2
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      3
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      4
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      5
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      6
                    </a>
                  </li>
                </ul>
                <ul className={styles.footerBlockList}>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      1
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      2
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      3
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      4
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      5
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      6
                    </a>
                  </li>
                </ul>
                <ul className={styles.footerBlockList}>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      1
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      2
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      3
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      4
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      5
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      6
                    </a>
                  </li>
                </ul>
                <ul className={styles.footerBlockList}>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      1
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      2
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      3
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      4
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      5
                    </a>
                  </li>
                  <li>
                    <a className={styles.footerBlockLink} href="">
                      6
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footerSecondUnderBlock}>
              <div className={styles.footerSecondUnderBlockFlex}>
                <p className={styles.footerSecondTitle}>Кредит и рассрочка</p>
              </div>
              <ul className={styles.footerBlockList}>
                <li>
                  <a className={styles.footerBlockLink} href="">
                    Экспресс-кредит
                  </a>
                </li>
                <li>
                  <a className={styles.footerBlockLink} href="">
                    Семейный автомобиль
                  </a>
                </li>
                <li>
                  <a className={styles.footerBlockLink} href="">
                    Первый автомобиль
                  </a>
                </li>
                <li>
                  <a className={styles.footerBlockLink} href="">
                    Работникам медицины
                  </a>
                </li>
                <li>
                  <a className={styles.footerBlockLink} href="">
                    Рассрочка
                  </a>
                </li>
                <li>
                  <a className={styles.footerBlockLink} href="">
                    Trade-in
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footerSecondUnderBlock}>
              <div className={styles.footerSecondUnderBlockFlex}>
                <p className={styles.footerSecondTitle}>Подборки</p>
              </div>
              <ul className={styles.footerBlockList}>
                <li>
                  <a className={styles.footerBlockLink} href="">
                    Семейные автомобили
                  </a>
                </li>
                <li>
                  <a className={styles.footerBlockLink} href="">
                    Автомобили для путешевствий
                  </a>
                </li>
                <li>
                  <a className={styles.footerBlockLink} href="">
                    Городские автомобили
                  </a>
                </li>
                <li>
                  <a className={styles.footerBlockLink} href="">
                    Внедорожники
                  </a>
                </li>
                <li>
                  <a className={styles.footerBlockLink} href="">
                    Кроссоверы
                  </a>
                </li>
                <li>
                  <a className={styles.footerBlockLink} href="">
                    Седаны
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
      <div className={styles.footerSecond}>
        <div className="container">
          <div className={styles.footerSecondGrid}>
            <div className={styles.footerSecondUnderBlock}>
              <p className={styles.footerSecondTextWhite}>
                Rodds - Сервисы размещения объявлений для юридических лиц
              </p>
              <div className={styles.footerSecondFlexBetween}>
                <Link
                  className={styles.footerSecondLinkBottom}
                  href="/page/about"
                >
                  Политика конфидециальности
                </Link>
                <Link className={styles.footerSecondLinkBottom} href="/page/about">
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
