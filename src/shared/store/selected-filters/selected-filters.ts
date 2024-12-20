import { SelectedFilterItem, SelectedFiltersState } from "@/shared/types/filter";
import { create } from "zustand";
import { initStore } from "../service";
import { devtools } from "zustand/middleware";



type State = {
  filters: SelectedFiltersState;
};

type Actions = {
  setFrom: (key: string, value: string) => void;
  setTo: (key: string, value: string) => void;
  setSelected: (key: string, option: string, value: boolean) => void;
  initFilters: (
    filters: { key: string; options?: string[]; from?: string; to?: string }[]
  ) => void;
};

type Store = State & Actions;

export const useSelectedFiltersStore = create<Store>()(
  devtools(
    (set) => ({
      filters: {},
      setFrom: (key, value) => {
        return set((state) => {
          const { filters } = state;
          const filter: SelectedFilterItem = filters[key];
          return {
            ...state,
            filters: { ...state.filters, [key]: { ...filter, from: value } },
          };
        }, false, 'setFrom');
      },
      setTo: (key, value) => {
        return set((state) => {
          const { filters } = state;
          const filter: SelectedFilterItem = filters[key];
          return {
            ...state,
            filters: { ...state.filters, [key]: { ...filter, to: value } },
          };
        }, false, 'setTo');
      },
      setSelected: (key, option, value) => {
        return set((state) => {
          const { filters } = state;
          const filter: SelectedFilterItem = filters[key];
          const selected = value
            ? [...filter?.selected ?? [], option]
            : filter.selected.filter((item) => {
                return item !== option;
              });
          return {
            ...state,
            filters: { ...state.filters, [key]: { ...filter, selected } },
          };
        }, false, 'setSelected');
      },
      initFilters: (filters) => {
        set((state) => {
          const result = {
            ...state,
            filters: filters.reduce((acc, { key, options, from, to }) => {
              acc[key] = {
                selected: options ?? [],
                from: from ?? "",
                to: to ?? "",
              };

              return acc;
            }, {} as SelectedFiltersState),
          };
          return result;
        }, false, 'initFilters') ;
      },
    })
  )
);
