import Image from 'next/image';
import { ToMain } from '@/lib/utils/route-url';
import styles from "./header.module.css";

import Whatsapp from '@/images/svg/whatsaap.svg';
import Burger from '@/images/svg/burger.svg';
import Rodds from '@/images/svg/logorodds.svg';
import Heart from '@/images/svg/heart.svg';
import Sravni from '@/images/svg/sravni.svg'
import Search from '@/images/svg/search.svg';
import Clock from '@/images/svg/clock.svg';

export default function header() {
  return (
    <>
    <header>
        <div className={`${styles.headerMiddle} container`}>
          <div className={styles.headerMiddleBlockBurger}>
            <button className={styles.headerMiddleButtonBurger}>
              <Image width={28} height={18} alt="Burger menu" src={Burger}></Image>
            </button>
          </div>
          <div className={styles.headerMiddleBlockLogo}>
            <a href='/'>
              <Image className={styles.headerMiddleLogo} alt="Logotype Rodds" src={Rodds}></Image>
            </a>
          </div>
          <nav className={styles.headerMiddleNav}>
            <ul className={styles.headerMiddleList}>
              <li className={styles.headerMiddleListItem}>
                <a className={`${styles.headerMiddleListItemLink} ${styles.headerMiddleListItemLinkDrop}`} href=''>Каталог авто</a>
                <div className={styles.headerMiddleListItemDropmenu}>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>1</a>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>2</a>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>3</a>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>4</a>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>5</a>
                </div>
              </li>
              <li className={styles.headerMiddleListItem}>
                <a className={`${styles.headerMiddleListItemLink} ${styles.headerMiddleListItemLinkDrop}`} href=''>Авто с пробегом</a>
                <div className={styles.headerMiddleListItemDropmenu}>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>1</a>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>2</a>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>3</a>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>4</a>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>5</a>
                </div>
              </li>
              <li className={styles.headerMiddleListItem}>
                <a className={`${styles.headerMiddleListItemLink} ${styles.headerMiddleListItemLinkDrop}`} href=''>Сервис</a>
                <div className={styles.headerMiddleListItemDropmenu}>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>1</a>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>2</a>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>3</a>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>4</a>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>5</a>
                </div>
              </li>
              <li className={styles.headerMiddleListItem}>
                <a className={`${styles.headerMiddleListItemLink} ${styles.headerMiddleListItemLinkDrop}`} href=''>Услуги</a>
                <div className={styles.headerMiddleListItemDropmenu}>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>1</a>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>2</a>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>3</a>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>4</a>
                  <a className={styles.headerMiddleListItemLinkDropLink} href=''>5</a>
                </div>
              </li>
            </ul>
          </nav>
          <div className={styles.headerMiddleBlockMenu}>
            <button className={styles.headerMiddleButtonsIcon}>
              <Image width={22} height={22} alt='Search' src={Search}></Image>
            </button>
            <button className={styles.headerMiddleButtonsIcon}>
              <Image width={22} height={22} alt='Heart' src={Heart}></Image>
            </button>
            <button className={styles.headerMiddleButtonsIcon}>
              <Image width={22} height={22} alt='Sravni' src={Sravni}></Image>
            </button>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <div className={`${styles.headerBottomBlock} container`}>
            <ul className={styles.headerBottomList}>
              <li><a className={styles.headerBottomLink} href="">Легковые</a></li>
              <li><a className={styles.headerBottomLink} href="">Коммерческие</a></li>
              <li><a className={styles.headerBottomLink} href="">Китайские</a></li>
              <li><a className={styles.headerBottomLink} href="">Мото</a></li>
              <li><a className={styles.headerBottomLink} href="">Электро</a></li>
            </ul>
          </div>
        </div>
    </header>
    </>
  )
}
