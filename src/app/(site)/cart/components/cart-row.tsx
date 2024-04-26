import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { InputNumber } from "@/components/ui/input-number/input-number";
import { InputString } from "@/components/ui/input-string/input-string";
import { CartProduct } from "../types/cart-product";
import { useCartStore } from "@/store/cart/cart";
import { calcCounts } from "@/services/cart";
import { ToProduct } from "@/lib/utils/route-url";
import styles from './cart.rows.module.css';
import Link from "next/link";
import Button from "@/components/ui/button/button";


type CartRowProps = {
  item: CartProduct;
  units: string[];
  onDelete: (id: string | number) => void;
};


export function CartRow({ item, units, onDelete }: CartRowProps) {
  const {
    product: { title, id, slug, addition },
    counts,
  } = item;

  const { updateProductItem } = useCartStore();

  function changeHandler(value: string, unit: string) {
    // console.log({ value, unit, k: addition.multiUnit });

    const counts = calcCounts(
      addition.multiUnit,
      unit,
      Number(value)
    );
    console.log({ id, counts });
    updateProductItem({ id, counts });
  }

  return (
    <tr className={styles.row}>
      <td className={styles.td}>
        <Checkbox value={false} onChange={() => {}} />
      </td>
      <td className={styles.td}>
        <Link href={ToProduct(slug)}>{title}</Link>
      </td>
      {units.map((unit, i) => (
        <td className={styles.td} key={`${id}-${i}`}>
          {!!counts[unit] ? (
            <InputNumber
              value={String(item.counts[unit])}
              onChange={(val) => {
                changeHandler(val, unit);
              }}
            />
          ) : (
            <InputString disabled value="" />
          )}
        </td>
      ))}
      <td className={styles.td}>
        <Button
          variant="red"
          onClick={() => {
            onDelete(id);
          }}
        >
          Удалить
        </Button>
      </td>
    </tr>
  );
}