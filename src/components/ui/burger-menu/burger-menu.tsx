import styles from "./burger-menu.module.css";

import Burger from "@/components/icons/burger";
import Close from "@/components/icons/close";

type Props = {
  active: boolean;
  onClick: (active: boolean) => void;
};

export default function BurgerMenu({ active, onClick }: Props) {
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
