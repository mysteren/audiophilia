import { Checkbox } from "@/shared/ui/checkbox/checkbox";
import { InputNumber } from "@/shared/ui/input-number/input-number";
import { InputString } from "@/shared/ui/input-string/input-string";
import { CartProduct } from "../../app/(site)/cart/types/cart-product";
import { useCartStore } from "@/store/cart/cart";
import { calcCounts } from "@/services/cart";
import { ToProduct } from "@/shared/lib/utils/route-url";
import styles from './cart-row.module.css';
import Link from "next/link";
import Button from "@/shared/ui/button/button";


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