export type SelectedFilterItem = {
  from: string;
  to: string;
  selected: string[];
};

export type SelectedFiltersState = Record<string, SelectedFilterItem>;
