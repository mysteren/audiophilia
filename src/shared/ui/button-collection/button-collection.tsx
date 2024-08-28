// Styles
import ArrLeft from "@/components/icons/arrleft";
import styles from "./button-collection.module.css";
import ArrRight from "@/components/icons/arrright";

export default function ButtonCollection(props: any) {
  const { clickLeft, clickRight } = props;

  return (
    <>
      <button aria-label="to prev" onClick={clickLeft} className={styles.btn}>
        <ArrLeft />
      </button>
      <button aria-label="to next" onClick={clickRight} className={styles.btn}>
        <ArrRight />
      </button>
    </>
  );
}
