"use client";

// Next modules
import Image from "next/image";

// React modules
import { ReactNode, useEffect, useState } from "react";

// Styles
import styles from "./wrapper-header.module.css";

// Widgets
import BurgerMenu from "@/components/ui/burger-menu/burger-menu";

// Icons
import HeartIcon from "@/components/icons/heart";
import SearchIcon from "@/components/icons/search";
import SravniIcon from "@/components/icons/sravni";
import { LinkItemData } from "@/services/site-settings/types";
import Link from "next/link";

type Props = {
  headerMenu2: LinkItemData[];
  children: ReactNode[];
};

export default function WrapperHeader({ children, headerMenu2 }: Props) {
  // const [active, setActive] = useState(false);

  const [scrollIsTop, setScrollIsTop] = useState(window.scrollY < 16);

  useEffect(() => {
    const scrollHandler = () => {
      setScrollIsTop(window.scrollY < 16);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <>
      <div className={`${styles.headerMiddle} container`}>
        <div className={styles.headerMiddleBlockBurger}>
          <BurgerMenu>{children[0]}</BurgerMenu>
          {/* <div className={styles.none}>{children[1]}</div> */}
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
      {scrollIsTop && (
        <div className={styles.headerBottom}>
          <div className={`${styles.headerBottomBlock} container`}>
            <ul className={styles.headerBottomList}>
              {headerMenu2.map((item, i) => {
                return (
                  <li key={`headMenu2Item-${i}`}>
                    <Link className={styles.headerBottomLink} href={item.href}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
