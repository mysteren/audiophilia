import { create } from "zustand";
import { initStore } from "../service";

export enum ModalKey {
  none = "",
  order = "order",
}

type State = {
  showModal: boolean;
  activeModal: ModalKey;
};

type Actions = {
  close: () => void;
  showOrder: () => void;
};

type Store = State & Actions;

export const useActioveModals = create<Store>()(
  initStore((set) => ({
    showModal: false,
    activeModal: ModalKey.none,
    showOrder: () => {
      return set((state) => {
        return { ...state, showModal: true, activeModal: ModalKey.order };
      });
    },
    close: () => {
      return set((state) => {
        return { ...state, showModal: false };
      });
    },
  }))
);
