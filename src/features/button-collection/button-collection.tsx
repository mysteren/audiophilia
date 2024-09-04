import styles from "./button-collection.module.css";
import ArrowIcon from "@/shared/ui/icons/arrow";

export default function ButtonCollection(props: any) {
  const { clickLeft, clickRight } = props;

  return (
    <>
      <button aria-label="to prev" onClick={clickLeft} className={styles.btn}>
        <ArrowIcon className="rotate180" />
      </button>
      <button aria-label="to next" onClick={clickRight} className={styles.btn}>
        <ArrowIcon />
      </button>
    </>
  );
}
