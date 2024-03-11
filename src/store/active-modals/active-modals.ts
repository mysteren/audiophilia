import { create } from "zustand";
import { initStore } from "../service";

export enum ModalKey {
  none = "",
  fastOrder = "fastOrder",
}

type State = {
  showModal: boolean;
  activeModal: ModalKey;
};

type Actions = {
  close: () => void;
  showFastOrder: () => void;
};

type Store = State & Actions;

export const useActioveModals = create<Store>()(
  initStore((set) => ({
    showModal: false,
    activeModal: ModalKey.none,
    showFastOrder: () => {
      return set((state) => {
        return { ...state, showModal: true, activeModal: ModalKey.fastOrder };
      });
    },
    close: () => {
      return set((state) => {
        return { ...state, showModal: false };
      });
    },
  }))
);
