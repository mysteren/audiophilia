import styles from "./burger-button.module.css";

import Burger from "@/shared/ui/icons/burger";
import CloseIcon from "@/shared/ui/icons/close";

type Props = {
  active: boolean;
  onClick: (active: boolean) => void;
};

export default function BurgerButton({ active, onClick }: Props) {
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
    </>
  );
}
