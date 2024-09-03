/* eslint-disable @next/next/no-img-element */
"use client";

import { LinkItemData } from "@/entities/site-settings/types";
import BurgerMenu from "@/features/burger-menu/burger-menu";
import { CategoryItem } from "@/shared/types/categoryItem";
import clsx from "clsx";
import Link from "next/link";
import styles from "./header.module.css";
import { BottomHeaderMenu } from "./bottom-header-menu/bottom-header-menu";
import { CategoriesCatalog } from "./categories-catalog";
import { TopRightBlock } from "./top-right-block/top-right-block";
import { useScrollIsTop } from "../model/use-scroll-top";
import { useShowCatalog } from "../model/use-show-catalog";

type Props = {
  headerMenu2: LinkItemData[];
  categories: CategoryItem[];
};

export default function Header({ categories, headerMenu2 }: Props) {
  const { scrollIsTop } = useScrollIsTop();
  const { showCatalog, showCatalogHandler } = useShowCatalog();

  return (
    <header
      className={clsx(styles.header, {
        [styles.showCatalog]: showCatalog,
        [styles.shadow]: !scrollIsTop && !showCatalog,
      })}
    >
      <div className={clsx("container", styles.subHeader)}>
        <div className={clsx(styles.iconWrap, styles.burger)}>
          <BurgerMenu active={showCatalog} onClick={showCatalogHandler} />
        </div>
        <div className={styles.logo}>
          <Link className={styles.iconWrap} href="https://investsteel.ru">
            <img
              className={styles.logoImg}
              alt="Investseel"
              src={"/images/logo.svg"}
            />
          </Link>
          <Link className={styles.iconWrap} href="/">
            <img
              className={styles.logoImg2}
              alt="market"
              src={"/images/logo-market.svg"}
            />
          </Link>
        </div>
        <div className={styles.contacts}>
          <a className={styles.info} href="tel:+74951888044">
            +7 (495) 188-80-44
          </a>
          <a className={styles.info} href="mailto:info@investsteel.ru">
            info@investsteel.ru
          </a>
        </div>

        <div className={styles.right}>
          <TopRightBlock />
        </div>
      </div>

      <div className={styles.catalogContainer}>
        <div className={clsx("container", styles.catalogGrid)}>
          <CategoriesCatalog items={categories} />
        </div>
      </div>

      {scrollIsTop && !showCatalog && (
        <div className={styles.bottomMenu}>
          <BottomHeaderMenu items={headerMenu2} />
        </div>
      )}
    </header>
  );
}
