/* eslint-disable @next/next/no-img-element */
"use client";

import clsx from "clsx";
import Link from "next/link";

import BurgerButton from "@/features/burger-button/ui/burger-button";
import Menu from "@/features/menu";
import { useShowCatalog } from "../model/use-show-catalog";
import styles from "./header.module.css";
import { TopRightBlock } from "./top-right-block/top-right-block";
import { ReactNode } from "react";
import Image from "next/image";

type Props = {
  // contacts: ReactNode;
};

export default function Header({}: Props) {
  // const { showCatalog, showCatalogHandler } = useShowCatalog();

  return (
    // <header
    //   className={clsx(styles.header, {
    //     [styles.showCatalog]: showCatalog,
    //   })}
    // >
    //   <div className={clsx("container", styles.subHeader)}>
    //     <div className={clsx(styles.iconWrap, styles.burger)}>
    //       <BurgerButton active={showCatalog} onClick={showCatalogHandler} />
    //     </div>

    //     <Link className={styles.logo} href="/">
    //       <img
    //         className={styles.logoImg}
    //         alt="Invest Market"
    //         src={"/icons/logo.svg"}
    //       />
    //       <span className={styles.logoTitle}>MARKET TOWER</span>
    //     </Link>
    //     <div className={styles.search}></div>

    //     <div className={styles.contacts}>
    //       {contacts}
    //       {/* <TopContacts /> */}
    //     </div>
    //     <div className={styles.right}>
    //       <TopRightBlock />
    //     </div>
    //   </div>

    //   <div className={styles.catalogContainer}>
    //     <div className={clsx("container", styles.catalogGrid)}>
    //       <Menu />
    //     </div>
    //   </div>

    //   {/* {scrollIsTop && !showCatalog && (
    //     <div className={styles.bottomMenu}>
    //       <BottomHeaderMenu />
    //     </div>
    //   )} */}
    // </header>
    <header className={styles.root}>
      <div className={`container  ${styles.content}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIconContainer}>
            <Image
              className={styles.logoIcon}
              width={32}
              height={32}
              unoptimized
              src="/favicon.svg"
              alt="Audiophilia"
            ></Image>
          </span>
          Аудиофилия.ру
        </Link>
        <div>
          <Link href="/contacts">Контакты</Link>
        </div>
      </div>
    </header>
  );
}
