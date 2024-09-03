import { round } from "@/shared/lib/utils/number";
import { CartItemCounts, CartProductItem } from "@/shared/types/cart";
import { Recoverable } from "repl";

export function checkIsInCart(id: number, items: CartProductItem[]) {
  return items.some((item) => {
    return item.id === id;
  });
}

export function calcCounts(
  multiUnits: CartItemCounts,
  key: string,
  value: number
) {
  const result: CartItemCounts = {};

  const divider = multiUnits[key];

  if (divider) {
    const unit = value / divider;

    for (const uKey in multiUnits) {
      result[uKey] = round(unit * multiUnits[uKey], 1000);
    }

    if (Number.isInteger(result["sht"])) {
      return result;
    } else {
      const correctValue = Math.round(result["sht"]);
      return calcCounts(multiUnits, "sht", correctValue);
    }
  }

  // const unit = value / multiUnits[key]
  // console.log({multiUnits, result})
  return multiUnits;
}
