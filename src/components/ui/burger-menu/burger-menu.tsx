"use client";

import { useState } from "react";

// Styles
import styles from "./burger-menu.module.css";

// Icons
import Burger from "@/components/icons/burger";
import Close from "@/components/icons/close";

type Props = {
  active: boolean;
  onClick: (active: boolean) => void;
};

export default function BurgerMenu({ active, onClick }: Props) {
  // const [ active, setActive ] = useState(false);

  // Functions
  // const handleState = () => {
  //   setActive(!active)
  // }

  return (
    <>
      <button
        onClick={() => {
          onClick(!active);
        }}
        className={styles.button}
      >
        {active ? <Close /> : <Burger />}
      </button>
      {/* <div className={`${styles.content} ${active ? styles.show : ''}`}>
            {children}
        </div> */}
    </>
  );
}
