import HeartIcon from "@/shared/ui/icons/heart";
import SearchIcon from "@/shared/ui/icons/search";

import styles from "./top-right-block.module.css";
import Link from "next/link";
import clsx from "clsx";
import CartIcon from "@/shared/ui/icons/cart";
import { HeaderCart } from "../header-cart/header-cart";

export function TopRightBlock() {
  return (
    <div className={clsx(styles.root)}>
      <Link href="/search" className={styles.icon}>
        <SearchIcon />
      </Link>
      <Link href="/favorite" className={styles.icon}>
        <HeartIcon />
      </Link>
      <HeaderCart>
        <Link href="/cart" className={styles.icon}>
          <CartIcon />
        </Link>
      </HeaderCart>
    </div>
  );
}
