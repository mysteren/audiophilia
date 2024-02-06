import HeartIcon from "@/components/icons/heart";
import SearchIcon from "@/components/icons/search";
import SravniIcon from "@/components/icons/sravni";

import styles from "./top-right-block.module.css";

export function TopRightBlock() {
  return (
    <div className={styles.container}>
      <button className={styles.icon}>
        <SearchIcon />
      </button>
      <button className={styles.icon}>
        <HeartIcon />
      </button>
      <button className={styles.icon}>
        <SravniIcon />
      </button>
    </div>
  );
}
