import styles from "./burger-menu.module.css";

import Burger from "@/components/icons/burger";
import CloseIcon from "@/components/icons/close";

type Props = {
  active: boolean;
  onClick: (active: boolean) => void;
};

export default function BurgerMenu({ active, onClick }: Props) {
  return (
    <>
      <button
        aria-label="catalog menu"
        onClick={() => {
          onClick(!active);
        }}
        className={styles.button}
      >
        {active ? <CloseIcon /> : <Burger />}
      </button>
      {/* <div className={`${styles.content} ${active ? styles.show : ''}`}>
            {children}
        </div> */}
    </>
  );
}
