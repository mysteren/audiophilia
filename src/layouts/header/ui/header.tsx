/* eslint-disable @next/next/no-img-element */
"use client";

import clsx from "clsx";
import Link from "next/link";

import BurgerMenu from "@/features/burger-button/ui/burger-button";
import Button from "@/shared/ui/button/button";
import EmailIcon from "@/shared/ui/icons/email";
import PhoneIcon from "@/shared/ui/icons/phone";
import { useScrollIsTop } from "../model/use-scroll-top";
import { useShowCatalog } from "../model/use-show-catalog";
import styles from "./header.module.css";
import { TopRightBlock } from "./top-right-block/top-right-block";
import Menu from "@/features/menu";
import BurgerButton from "@/features/burger-button/ui/burger-button";
import BottomHeaderMenu from "@/features/bottom-header-menu";


export default function Header() {
  
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
          <BurgerButton active={showCatalog} onClick={showCatalogHandler} />
        </div>
        <div className={styles.logo}>
          <Link className={styles.iconWrap} href="https://investsteel.ru">
            <img
              className={styles.logoImg}
              alt="Investseel"
              src={"/icons/logo.svg"}
            />
          </Link>
          <Link className={styles.iconWrap} href="/">
            <img
              className={clsx(styles.logoImg2, "logoImg2")}
              alt="market"
              src={"/icons/investmarket.svg"}
            />
          </Link>
        </div>
        <div className={styles.contacts}>
          <PhoneIcon className={styles.icon} />
          <a className={styles.info} href="tel:+74951888044">
            +7 (495) 188-80-44
          </a>

          <EmailIcon className={styles.icon} />
          <a className={styles.info} href="mailto:info@investsteel.ru">
            info@investsteel.ru
          </a>
        </div>
        <div className={styles.actions}>
          <Link className={styles.toDetail} href="/page/postavshchikam">
            <Button>Добавить обьявление</Button>
          </Link>
        </div>
        <div className={styles.right}>
          <TopRightBlock />
        </div>
      </div>

      <div className={styles.catalogContainer}>
        <div className={clsx("container", styles.catalogGrid)}>
          <Menu />
        </div>
      </div>

      {scrollIsTop && !showCatalog && (
        <div className={styles.bottomMenu}>
          <BottomHeaderMenu />
        </div>
      )}
    </header>
  );
}
