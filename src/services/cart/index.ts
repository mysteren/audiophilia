import { CartProductItem } from "@/types/cart";

export function checkIsInCart(id: number, items: CartProductItem[]) {
  return items.some((item) => {
    return item.id === id;
  });
}
