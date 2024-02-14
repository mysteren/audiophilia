import { SelectedFilterItem, SelectedFiltersState } from "@/types/filter.type";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  filters: SelectedFiltersState;
};

type Actions = {
  setFrom: (key: string, value: string) => void;
  setTo: (key: string, value: string) => void;
  setSelected: (key: string, option: string, value: boolean) => void;
  // resetFilters: () => void;
  initFilters: (keys: string[]) => void;
};

type Store = State & Actions;

export const useSelectedFiltersStore = create<Store>()(
  devtools((set) => ({
    filters: {},
    setFrom: (key, value) => {
      // console.log("setFrom", { key, value });
      return set((state) => {
        const { filters } = state;
        const filter: SelectedFilterItem = filters[key];
        return {
          ...state,
          filters: { ...state.filters, [key]: { ...filter, from: value } },
        };
      });
    },
    setTo: (key, value) => {
      console.log("setTo", { key, value });
      return set((state) => {
        const { filters } = state;
        const filter: SelectedFilterItem = filters[key];
        return {
          ...state,
          filters: { ...state.filters, [key]: { ...filter, to: value } },
        };
      });
    },
    setSelected: (key, option, value) => {
      // const selected: string[] =
      return set((state) => {
        const { filters } = state;
        const filter: SelectedFilterItem = filters[key];
        const selected = value
          ? [...filter.selected, option]
          : filter.selected.filter((item) => {
              return item !== option;
            });
        return {
          ...state,
          filters: { ...state.filters, [key]: { ...filter, selected } },
        };
      });
    },
    initFilters: (keys) => {
      set((state) => {
        const result = {
          ...state,
          filters: keys.reduce((acc, key) => {
            acc[key] = { selected: [], from: "", to: "" };
            console.log(acc);
            return acc;
          }, {} as SelectedFiltersState),
        };
        // console.log(result);
        return result;
      });
    },

    // resetFilters: () => {},
  }))
);
