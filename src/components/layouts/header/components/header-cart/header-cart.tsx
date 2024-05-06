import React, { ReactNode, useEffect } from "react";
import styles from "./header-cart.module.css";
import clsx from "clsx";
import { useCartStore } from "@/store/cart/cart";

type Props = {
  children: ReactNode;
};

export function HeaderCart({ children }: Props) {
  const { productItems } = useCartStore();

  const count = productItems.length;

  return (
    <div className={clsx(styles.container)}>
      {!!count && <div className={clsx(styles.counter)}>{count}</div>}
      {children}
    </div>
  );
}
