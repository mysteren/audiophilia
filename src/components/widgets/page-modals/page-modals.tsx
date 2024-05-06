"use client";
import ModalWindow from "@/components/ui/modal-window/modal-window";
import {
  ModalKey,
  useActioveModals,
} from "@/store/active-modals/active-modals";
import Order from "../order/order";

// const Props = {};

export default function PageModals() {
  const { showModal, activeModal, close } = useActioveModals();

  const content = () => {
    switch (activeModal) {
      case ModalKey.order:
        return <Order />;
    }
  };

  return (
    <>
      <ModalWindow
        show={!!showModal}
        onClose={() => {
          close();
        }}
      >
        {content()}
      </ModalWindow>
    </>
  );
}
