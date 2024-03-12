import { uuidv4 } from "@/lib/utils/crypto";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type CartProductItem = {
  id: string | number;
  count: number;
};

type State = {
  userId: string;
  fastProductItems: CartProductItem[];
  orders: {
    items: CartProductItem[];
  };
};

type Actions = {
  setFastProductItems: (items: CartProductItem[]) => void;
};

// type Selecttors = {
//   getFastProductItems:
// }

type Store = State & Actions;

export const useCartStore = create<Store>()(
  devtools(
    persist(
      (set) =>
        ({
          userId: uuidv4(),
          fastProductItems: [],
          orders: {
            items: [],
          },
          setFastProductItems: (items) => {
            return set((state) => {
              return { ...state, fastProductItems: items };
            });
          },
        } as Store),
      { name: "user-cart", storage: createJSONStorage(() => localStorage) }
    )
  )
);
