'use client'

// Next modules
import Image from "next/image";

// React modules
import { ReactNode, useState } from "react";

// Styles
import styles from './wrapper-header.module.css';

// Widgets
import BurgerMenu from "@/components/ui/burger-menu/burger-menu";

// Icons
import SearchIcon from "@/components/icons/search";
import HeartIcon from "@/components/icons/heart";
import SravniIcon from "@/components/icons/sravni";

type Props = {
    children: ReactNode[];
}

export default function WrapperHeader({ children } :Props) {

    const [active, setActive] = useState(false);

  return (
    <div>
        <div className={`${styles.headerMiddle} container`}>
          <div className={styles.headerMiddleBlockBurger}>
            <BurgerMenu>{children[0]}</BurgerMenu>
            {children[1]}
          </div>
          <div className={styles.headerMiddleBlockLogo}>
            <a href="/">
              <Image
                className={styles.headerMiddleLogo}
                width={200}
                height={30}
                unoptimized
                alt="Logotype Rodds"
                src={"/images/logorodds.svg"}
              ></Image>
            </a>
          </div>
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
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
                    1
                  </a>
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
                    2
                  </a>
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
                    3
                  </a>
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
                    4
                  </a>
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
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
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
                    1
                  </a>
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
                    2
                  </a>
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
                    3
                  </a>
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
                    4
                  </a>
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
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
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
                    1
                  </a>
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
                    2
                  </a>
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
                    3
                  </a>
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
                    4
                  </a>
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
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
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
                    1
                  </a>
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
                    2
                  </a>
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
                    3
                  </a>
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
                    4
                  </a>
                  <a
                    className={styles.headerMiddleListItemLinkDropLink}
                    href=""
                  >
                    5
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div className={styles.headerMiddleBlockMenu}>
            <button className={styles.headerMiddleButtonsIcon}>
              <SearchIcon />
            </button>
            <button className={styles.headerMiddleButtonsIcon}>
              <HeartIcon />
            </button>
            <button className={styles.headerMiddleButtonsIcon}>
              <SravniIcon />
            </button>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <div className={`${styles.headerBottomBlock} container`}>
            <ul className={styles.headerBottomList}>
              <li>
                <a className={styles.headerBottomLink} href="">
                  Легковые
                </a>
              </li>
              <li>
                <a className={styles.headerBottomLink} href="">
                  Коммерческие
                </a>
              </li>
              <li>
                <a className={styles.headerBottomLink} href="">
                  Китайские
                </a>
              </li>
              <li>
                <a className={styles.headerBottomLink} href="">
                  Мото
                </a>
              </li>
              <li>
                <a className={styles.headerBottomLink} href="">
                  Электро
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
