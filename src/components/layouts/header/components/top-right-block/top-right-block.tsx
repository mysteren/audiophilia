import HeartIcon from "@/components/icons/heart";
import SearchIcon from "@/components/icons/search";
import SravniIcon from "@/components/icons/sravni";

import styles from "./top-right-block.module.css";
import Link from "next/link";

export function TopRightBlock() {
  return (
    <div className={styles.container}>
      <Link href="/search" className={styles.icon}>
        <SearchIcon />
      </Link>
      <Link href="/favorite" className={styles.icon}>
        <HeartIcon />
      </Link>
      <Link href="/compare" className={styles.icon}>
        <SravniIcon />
      </Link>
    </div>
  );
}
