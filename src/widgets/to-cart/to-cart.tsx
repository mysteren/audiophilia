"use client";

import Button from "@/shared/ui/button/button";
import { checkIsInCart } from "@/services/cart";
import { getProductsById } from "@/services/product";
import { useCartStore } from "@/store/cart/cart";
import { useRouter } from "next/navigation";

type Props = {
  productId: number;

};

export default function ToCart({ productId }: Props) {
  const { addProductItem, productItems } = useCartStore();

  const isInCart = checkIsInCart(productId, productItems);

  const router = useRouter();

  const click = async () => {
    if (isInCart) {
      router.push("/cart");
    } else {
      const product = await getProductsById(productId)
      if (product) {
        addProductItem({ id: product.id, counts: product.addition.multiUnit });
      }
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
