import HeartIcon from "@/components/icons/heart";
import SearchIcon from "@/components/icons/search";
import SravniIcon from "@/components/icons/sravni";

import styles from "./top-right-block.module.css";

export function TopRightBlock() {
  return (
    <div className={styles.container}>
      <button area-label="search" className={styles.icon}>
        <SearchIcon />
      </button>
      <button area-label="to favorite"   className={styles.icon}>
        <HeartIcon />
      </button>
      <button aria-label="to compare" className={styles.icon}>
        <SravniIcon />
      </button>
    </div>
  );
}
