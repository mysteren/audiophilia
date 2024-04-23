"use client";

import Button from "@/components/ui/button/button";
import { useActioveModals } from "@/store/active-modals/active-modals";
import { useCartStore } from "@/store/cart/cart";

type Props = {
  productId: number;
};

export default function ToFastOrder({ productId }: Props) {
  const { showFastOrder } = useActioveModals();
  const { setFastProductItems } = useCartStore();

  const click = () => {
    showFastOrder();
    setFastProductItems([{ id: productId, count: 1, units: {} }]);
  };

  return (
    <>
      <Button onClick={click} variant="primary">
        Заказать
      </Button>
    </>
  );
}
