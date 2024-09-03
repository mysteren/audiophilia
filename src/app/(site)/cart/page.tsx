"use client";
import Button from "@/shared/ui/button/button";
import { getProductsByIds } from "@/entities/product";
import { useCartStore } from "@/shared/store/cart/cart";
import { CartProductItem } from "@/shared/types/cart";
import { Product } from "@/shared/types/product";
import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CartRow } from "../../../widgets/cart-row/cart-row";
import styles from "./page.module.css";
import { CartProduct } from "./types/cart-product";
import { translateUnit } from "@/shared/lib/utils/unit";
import ToOrderButton from "@/features/to-order-button/to-order-button";
import PageModals from "@/widgets/page-modals/page-modals";

async function getData(
  items: CartProductItem[],
  dispatch: Dispatch<SetStateAction<CartProduct[]>>
) {
  const records = await getProductsByIds(
    items.map(({ id }) => {
      return id;
    })
  );

  const result = records.map((product) => {
    const item = items.find(({ id }) => {
      return id === product.id;
    });

    return {
      product,
      counts: item ? item.counts : {},
    };
  });

  dispatch(result);
}

function getUnitKeys(products: Product[]) {
  const set = new Set<string>();
  for (let product of products) {
    const units = product.addition?.multiUnit;
    if (product.addition?.multiUnit) {
      for (let unit in units) {
        set.add(unit);
      }
    }
  }
  return Array.from(set);
}

export default function CartPage() {
  const { productItems, deleteProductItem } = useCartStore();

  const [rows, setRows] = useState<CartProduct[]>([]);

  const unitsKeys = getUnitKeys(rows.map(({ product }) => product));

  const unitsKeysCols = unitsKeys.map((el, i) => (
    <th className={clsx(styles.th, styles.colUnit)} key={`unit-key-${i}`}>
      {translateUnit(el)}
    </th>
  ));

  useEffect(() => {
    if (productItems.length) {
      getData(productItems, setRows);
    } else {
      setRows([]);
    }
  }, [productItems]);

  if (rows.length) {
    return (
      <>
        <h1>Корзина</h1>
        <div className={styles.main}>
          <section className={styles.section}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}></th>
                  <th className={clsx(styles.th, styles.colGrow)}>Название</th>
                  {unitsKeysCols}
                </tr>
              </thead>
              <tbody>
                {rows.map((item, i) => (
                  <CartRow
                    key={i}
                    item={item}
                    units={unitsKeys}
                    onDelete={deleteProductItem}
                  />
                ))}
              </tbody>
            </table>
            {/* <div className={clsx(styles.row, styles.rowHead)}>
              <div>Название</div>
              {unitsKeysCols}
              <div></div>
            </div> */}
          </section>
          <aside className={styles.aside}>
            <ToOrderButton />
          </aside>
        </div>
        <PageModals />
      </>
    );
  }

  return (
    <>
      <h1>Корзина</h1>
      <p>Корзина пуста</p>
    </>
  )

}
