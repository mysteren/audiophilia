"use client";

import Button from "@/components/ui/button/button";
import { useActioveModals } from "@/store/active-modals/active-modals";

type Props = {};

export default function ToFastOrder(_props: Props) {
  const { showFastOrder } = useActioveModals();

  return (
    <>
      <Button onClick={() => showFastOrder()} variant="primary">
        Заказать
      </Button>
    </>
  );
}
