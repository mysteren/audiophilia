import HeartIcon from "@/components/icons/heart";
import SearchIcon from "@/components/icons/search";

import styles from "./top-right-block.module.css";
import Link from "next/link";
import clsx from "clsx";
import CartIcon from "@/components/icons/cart";

export function TopRightBlock() {
  return (
    <div className={clsx(styles.container)}>
      <Link href="/search" className={styles.icon}>
        <SearchIcon />
      </Link>
      <Link href="/favorite" className={styles.icon}>
        <HeartIcon />
      </Link>
      <Link href="/cart" className={styles.icon}>
        <CartIcon />
      </Link>
    </div>
  );
}
