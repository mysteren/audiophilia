import { uuidv4 } from "@/shared/lib/utils/crypto";
import { CartProductItem } from "@/types/cart";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { initStore } from "../service";

type State = {
  userId: string;
  productItems: CartProductItem[];
};

type Actions = {
  setProductItems: (items: CartProductItem[]) => void;
  addProductItem: (item: CartProductItem) => void;
  updateProductItem: (item: CartProductItem) => void;
  deleteProductItem: (id: string | number) => void;
  clearProductItem: () => void;
};

type Store = State & Actions;

export const useCartStore = create<Store>()(
  persist(
    initStore(
      (set) =>
        ({
          userId: uuidv4(),
          productItems: [],
          setProductItems: (items) => {
            return set(
              (state) => {
                return { ...state, productItems: items };
              },
              false,
              "setProductItems"
            );
          },
          clearProductItem: () => {
            return set(
              (state) => {
                return { ...state, productItems: [] };
              },
              false,
              "clearProductItems"
            );
          },
          addProductItem: (item) => {
            return set(
              (state) => {
                // console.log(state)
                const productItems = [...state.productItems];
                if (
                  !productItems.find(({ id }) => {
                    return id === item.id;
                  })
                ) {
                  productItems.push(item);
                }

                return {
                  ...state,
                  productItems,
                };
              },
              false,
              "addProductItem"
            );
          },
          updateProductItem: (item) => {
            return set(
              (state) => {
                console.log(item);
                const productItems = state.productItems.map((el) => {
                  if (item.id === el.id) {
                    return item;
                  }
                  return el;
                });
                return {
                  ...state,
                  productItems,
                };
              },
              false,
              "updateProductItem"
            );
          },
          deleteProductItem: (id) => {
            return set(
              (state) => {
                return {
                  ...state,
                  productItems: state.productItems.filter((item) => {
                    return item.id !== id;
                  }),
                };
              },
              false,
              "deleteProductItem"
            );
          },
        } as Store)
    ),
    { name: "user-cart", storage: createJSONStorage(() => localStorage) }
  )
);

// { name: "user-cart", storage: createJSONStorage(() => localStorage) }
