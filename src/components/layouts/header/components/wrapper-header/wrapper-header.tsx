"use client";

import BurgerMenu from "@/components/ui/burger-menu/burger-menu";
import { LinkItemData } from "@/services/site-settings/types";
import { CategoryItem } from "@/types/categoryItem";
import Image from "next/image";
import Link from "next/link";
import { BottomHeaderMenu } from "../bottom-header-menu/bottom-header-menu";
import { CategoriesTree } from "../categories-tree.tsx/categories-tree";
import { TopHeaderMenu } from "../top-header-menu/top-header-menu";
import { TopRightBlock } from "../top-right-block/top-right-block";
import { useScrollIsTop } from "./hooks/use-scroll-top";
import { useShowCatalog } from "./hooks/use-show-catalog";
import styles from "./wrapper-header.module.css";
import { CategoriesCatalog } from "../categories-catalog";

type Props = {
  headerMenu2: LinkItemData[];
  categories: CategoryItem[];
};

export default function WrapperHeader({ categories, headerMenu2 }: Props) {
  const { scrollIsTop } = useScrollIsTop();
  const { showCatalog, showCatalogHandler } = useShowCatalog();

  return (
    <header
      className={`${styles.header} 
        ${showCatalog ? styles.showCatalog : ""} ${
        scrollIsTop || showCatalog ? "" : styles.headerShadow
      }`}
    >
      <div className={`container ${styles.subHeader}  `}>
        <div className={styles.iconWrap}>
          <BurgerMenu active={showCatalog} onClick={showCatalogHandler} />
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

        <TopHeaderMenu />

        <TopRightBlock />
      </div>

      <div className={styles.catalogContainer}>
        <div className={`container ${styles.catalogGrid}`}>
            <CategoriesCatalog items={categories}/>
        </div>
      </div>

      {scrollIsTop && !showCatalog && <BottomHeaderMenu items={headerMenu2} />}
    </header>
  );
}
