import Image from 'next/image';
import { ToMain } from '@/lib/utils/route-url';
import styles from "./header.module.css";

import Whatsapp from '@/images/svg/whatsaap.svg'

export default function header() {
  return (
    <header className={styles.header}>
        <div className={styles.headerTop}>
          <ul className={styles.headerTopList}>
            <li className={styles.headerTopListItem}>Россия, Москва</li>
            <li className={styles.headerTopListItem}>Время работы: с 08:00 до 21:00</li>
            <li className={styles.headerTopListItem}><Image width={20} height={20} src={Whatsapp} alt="Whatsapp logo"></Image>Whatsapp</li>
          </ul>
        </div>
        <div className={styles.headerMiddle}>
          <div>
            Burger
          </div>
          <div>
            Logo
          </div>
          <div>
            Nav
          </div>
          <div>
            Phones
          </div>
          <div>
            CallBack button
          </div>
        </div>
        <div className={styles.headerBottom}></div>
    </header>
  )
}
