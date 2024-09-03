"use client";
import ModalWindow from "@/features/modal-window/modal-window";
import {
  ModalKey,
  useActioveModals,
} from "@/shared/store/active-modals/active-modals";
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
