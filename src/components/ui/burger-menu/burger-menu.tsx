'use client'

import { useState } from 'react';

// Styles
import styles from './burger-menu.module.css';

// Icons
import Burger from '@/components/icons/burger';

type Props = {
    children: React.ReactNode;
}

export default function BurgerMenu({ children } :Props) {

  const [ active, setActive ] = useState(false);

  // Functions
  const handleState = () => {
    setActive(!active)
  }

  return (
    <>
        <button onClick={handleState} className={styles.headerMiddleButtonBurger}>
            <Burger/>
        </button>
        <div className={`${styles.burgerMenu} ${active ? styles.burgerMenuOpen : ''}`}>
            {children}
        </div>
    </>
  )
}
