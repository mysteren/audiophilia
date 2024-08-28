"use client";

import Button from "@/shared/ui/button/button";
import { useActioveModals } from "@/store/active-modals/active-modals";

export default function ToOrderButton() {
  const { showOrder } = useActioveModals();

  const click = () => {
    showOrder();
  };

  return (
    <>
      <Button onClick={click} variant="primary">
        Оформить
      </Button>
    </>
  );
}
