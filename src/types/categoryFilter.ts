export enum FilterType {
  value = "value",
  select = "select",
}

export type FilterPropery = {
  min?: number;
  max?: number;
  unit?: string;
};

export type FilterOption = {
  name: string;
  value: string;
};

export type Filter = {
  id: number;
  name: string;
  type: string;
  key: string;
  properties: FilterPropery;
  options: FilterOption[];
};
