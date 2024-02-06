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
import { CategoryItem } from "@/types/categoryItem";
import { CategoriesTree } from "../categories-tree.tsx/categories-tree";
import { BottomHeaderMenu } from "../bottom-header-menu/bottom-header-menu";

type Props = {
  headerMenu2: LinkItemData[];
  categories: CategoryItem[];
  // children: ReactNode;
};

export default function WrapperHeader({ categories, headerMenu2 }: Props) {
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
    <header className={`${styles.header}`}>
      <div className={`${styles.container} container `}>
        <div className={styles.iconWrap}>
          <BurgerMenu>
            <CategoriesTree items={categories} />
          </BurgerMenu>
        </div>

        <Link className={styles.iconWrap} href="/">
          <Image
            width={200}
            height={30}
            unoptimized
            alt="Logotype Rodds"
            src={"/images/logorodds.svg"}
          ></Image>
        </Link>

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
        <BottomHeaderMenu items={headerMenu2} />
      )}
    </header>
  );
}
