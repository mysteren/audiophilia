// Styles
import ArrLeft from "@/components/icons/arrleft";
import styles from "./button-collection.module.css";
import ArrRight from "@/components/icons/arrright";

export default function ButtonCollection(props: any) {
  const { clickLeft, clickRight } = props;

  return (
    <>
      <button onClick={clickLeft} className={styles.btn}>
        <ArrLeft />
      </button>
      <button onClick={clickRight} className={styles.btn}>
        <ArrRight />
      </button>
    </>
  );
}
