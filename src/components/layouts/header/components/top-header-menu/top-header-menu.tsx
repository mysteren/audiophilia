import styles from "./top-header-menu.module.css";

export function TopHeaderMenu() {
  return (
    <nav className={styles.headerMiddleNav}>
      <ul className={styles.headerMiddleList}>
        <li className={styles.headerMiddleListItem}>
          <a
            className={`${styles.headerMiddleListItemLink} ${styles.headerMiddleListItemLinkDrop}`}
            href=""
          >
            Каталог авто
          </a>
          <div className={styles.headerMiddleListItemDropmenu}>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              1
            </a>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              2
            </a>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              3
            </a>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              4
            </a>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              5
            </a>
          </div>
        </li>
        <li className={styles.headerMiddleListItem}>
          <a
            className={`${styles.headerMiddleListItemLink} ${styles.headerMiddleListItemLinkDrop}`}
            href=""
          >
            Авто с пробегом
          </a>
          <div className={styles.headerMiddleListItemDropmenu}>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              1
            </a>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              2
            </a>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              3
            </a>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              4
            </a>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              5
            </a>
          </div>
        </li>
        <li className={styles.headerMiddleListItem}>
          <a
            className={`${styles.headerMiddleListItemLink} ${styles.headerMiddleListItemLinkDrop}`}
            href=""
          >
            Сервис
          </a>
          <div className={styles.headerMiddleListItemDropmenu}>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              1
            </a>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              2
            </a>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              3
            </a>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              4
            </a>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              5
            </a>
          </div>
        </li>
        <li className={styles.headerMiddleListItem}>
          <a
            className={`${styles.headerMiddleListItemLink} ${styles.headerMiddleListItemLinkDrop}`}
            href=""
          >
            Услуги
          </a>
          <div className={styles.headerMiddleListItemDropmenu}>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              1
            </a>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              2
            </a>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              3
            </a>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              4
            </a>
            <a className={styles.headerMiddleListItemLinkDropLink} href="">
              5
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
