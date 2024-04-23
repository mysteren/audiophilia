"use client";

import Button from "@/components/ui/button/button";
import { checkIsInCart } from "@/services/cart";
import { useCartStore } from "@/store/cart/cart";
import { useRouter } from "next/navigation";

type Props = {
  productId: number;
};

export default function ToCart({ productId }: Props) {
  const { addProductItem, productItems } = useCartStore();

  const isInCart = checkIsInCart(productId, productItems);

  const router = useRouter();

  const click = () => {
    if (isInCart) {
      router.push("/cart");
    } else {
      addProductItem({ id: productId, count: 1, units: {} });
    }
  };

  const variant = isInCart ? "green" : "primary";

  return (
    <>
      <Button onClick={click} variant={variant}>
        {isInCart ? "В корзине" : "В корзину"}
      </Button>
    </>
  );
}
