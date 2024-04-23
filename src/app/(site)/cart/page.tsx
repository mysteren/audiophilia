"use client";
import { useCartStore } from "@/store/cart/cart";
import styles from "./page.module.css";
import Button from "@/components/ui/button/button";
import { Product } from "@/types/product";
import { getProductsByIds } from "@/services/product";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import clsx from "clsx";
import { CartProductItem } from "@/types/cart";

type CartRowProps = {
  product: Product;
  count: number;
  onDelete: (id: string | number) => void;
};

function CartRow({ product: { title, id }, count, onDelete }: CartRowProps) {
  return (
    <div className={styles.row}>
      <div>{title}</div>
      <div>{count}</div>
      <div>
        <Button
          variant="red"
          onClick={() => {
            onDelete(id);
          }}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
}

// type Props = {};

// export function metadata() {
//   const title = "Корзина";
//   const description = "RJhpbyf";
//   const canonical = "/page/cart";
//   return {
//     title,
//     description,
//     alternates: {
//       canonical,
//     },
//   };
// }

async function getData(
  items: CartProductItem[],
  dispatch: Dispatch<SetStateAction<{ product: Product; count: number }[]>>
) {
  const records = await getProductsByIds(
    items.map(({ id }) => {
      return id;
    })
  );

  dispatch(
    records.map((product) => {
      return {
        product,
        count: 0,
      };
    })
  );
}

export default function CartPage() {
  const { productItems, deleteProductItem } = useCartStore();

  const [rows, setRows] = useState<{ product: Product; count: number }[]>([]);

  useEffect(() => {
    console.log(productItems);
    if (productItems.length) {
      getData(productItems, setRows);
    } else {
      setRows([]);
    }
  }, [productItems]);

  // const rows = productItems.map(({ id, count, units }, i) => {
  //   return (
  //     <div className={styles.row} key={`cart-row-${i}`}>
  //       <div>{id}</div>
  //       <div>{count}</div>
  //     </div>
  //   );
  // });

  return (
    <>
      <h1>Корзина</h1>
      <div className={styles.main}>
        <section className={styles.section}>
          <div className={clsx(styles.row, styles.rowHead)}>
            <div>Название</div>
            <div>Количество</div>
            <div>Управление</div>
          </div>
          {rows.map(({ product, count }, i) => (
            <CartRow
              key={i}
              product={product}
              count={count}
              onDelete={deleteProductItem}
            />
          ))}
        </section>
        <aside className={styles.aside}>
          <Button variant="primary">Оформить</Button>
        </aside>
      </div>
    </>
  );
}
