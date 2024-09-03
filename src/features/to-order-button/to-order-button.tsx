"use client";

import Button from "@/shared/ui/button/button";
import { useActioveModals } from "@/shared/store/active-modals/active-modals";

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
