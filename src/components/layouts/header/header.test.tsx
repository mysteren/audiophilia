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
    <header className={styles.header}>
        <div className={styles.headerTop}>
          <ul className={styles.headerTopList}>
            <li className={styles.headerTopListItem}>Россия, Москва</li>
            <li className={styles.headerTopListItem}><Image width={16} height={16} alt="clock" src={Clock}/>Время работы: с 08:00 до 21:00</li>
            <li className={styles.headerTopListItem}><Image width={20} height={20} src={Whatsapp} alt="Whatsapp logo"></Image>Whatsapp</li>
          </ul>
        </div>
        <div className={styles.headerMiddle}>
          <div className={styles.headerMiddleBlockBurger}>
            <button className={styles.headerMiddleButtonBurger}>
              <Image width={28} height={18} alt="Burger menu" src={Burger}></Image>
            </button>
          </div>
          <div className={styles.headerMiddleBlockLogo}>
            <a href='/'>
              <Image width={200} height={30} alt="Logotype Rodds" src={Rodds}></Image>
            </a>
          </div>
          <div className={styles.headerMiddleBlockNav}>
            <nav>
              <ul className={styles.headerMiddleList}>
                <li className={styles.headerMiddleItem}>Подбор авто</li>
                <li className={styles.headerMiddleItem}>О компании</li>
                <li className={styles.headerMiddleItem}>Техцентер</li>
                <li className={styles.headerMiddleItem}>Отзывы</li>
                <li className={styles.headerMiddleItem}>Контакты</li>
              </ul>
            </nav>
          </div>
          <div className={styles.headerMiddleBlockInfo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <circle cx="15.5" cy="15.5" r="15.5" fill="#CA0100"/>
            <path d="M23.6889 19.7226L21.9151 18.54L20.3383 17.489C20.034 17.2865 19.625 17.3529 19.4004 17.6412L18.4247 18.8956C18.2151 19.1677 17.838 19.246 17.5375 19.0796C16.8754 18.7113 16.0925 18.3645 14.3651 16.6349C12.6377 14.9053 12.2887 14.1246 11.9204 13.4625C11.754 13.162 11.8323 12.7849 12.1044 12.5754L13.3588 11.5997C13.6471 11.375 13.7135 10.9661 13.5111 10.6617L12.4923 9.13348L11.2774 7.31112C11.0706 7.00094 10.6567 6.90781 10.337 7.09953L8.93591 7.94008C8.55726 8.16318 8.27892 8.52342 8.15855 8.94614C7.77539 10.3431 7.69814 13.4247 12.6368 18.3634C17.5755 23.3021 20.6569 23.2246 22.0538 22.8414C22.4766 22.7211 22.8368 22.4427 23.0599 22.0641L23.9004 20.663C24.0922 20.3433 23.9991 19.9294 23.6889 19.7226Z" fill="white"/>
            </svg>
            <a className={styles.headerMiddlePhone} href=''>
              8(800)555-35-35
            </a>
          </div>
          <div className={styles.headerMiddleBlockCallback}>
            <button className={styles.headerMiddleButtonCallback}>Обратный звонок</button>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <nav className={styles.headerBottomNav}>
            <ul className={styles.headerBottomList}>
              <li className={styles.headerBottomListItem}>
                <a className={`${styles.headerBottomListItemLink} ${styles.headerBottomListItemLinkDrop}`} href=''>Каталог авто</a>
                <div className={styles.headerBottomListItemDropmenu}>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>1</a>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>2</a>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>3</a>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>4</a>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>5</a>
                </div>
              </li>
              <li className={styles.headerBottomListItem}>
                <a className={`${styles.headerBottomListItemLink} ${styles.headerBottomListItemLinkDrop}`} href=''>Авто с пробегом</a>
                <div className={styles.headerBottomListItemDropmenu}>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>1</a>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>2</a>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>3</a>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>4</a>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>5</a>
                </div>
              </li>
              <li className={styles.headerBottomListItem}>
                <a className={`${styles.headerBottomListItemLink} ${styles.headerBottomListItemLinkDrop}`} href=''>Кредит и рассрочка</a>
                <div className={styles.headerBottomListItemDropmenu}>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>1</a>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>2</a>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>3</a>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>4</a>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>5</a>
                </div>
              </li>
              <li className={styles.headerBottomListItem}>
                <a className={`${styles.headerBottomListItemLink} ${styles.headerBottomListItemLinkDrop}`} href=''>Спецпредложения</a>
                <div className={styles.headerBottomListItemDropmenu}>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>1</a>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>2</a>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>3</a>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>4</a>
                  <a className={styles.headerBottomListItemLinkDropLink} href=''>5</a>
                </div>
              </li>
            </ul>
          </nav>
          <div>
            <div>
              <button className={styles.headerBottomButtonsIcon}>
                <Image width={22} height={22} alt='Search' src={Search}></Image>
              </button>
              <button className={styles.headerBottomButtonsIcon}>
                <Image width={22} height={22} alt='Heart' src={Heart}></Image>
              </button>
              <button className={styles.headerBottomButtonsIcon}>
                <Image width={22} height={22} alt='Sravni' src={Sravni}></Image>
              </button>
            </div>
          </div>
        </div>
    </header>
  )
}
