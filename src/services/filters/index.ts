import { Filter } from "@/types/categoryFilter";
import { SelectedFilterItem } from "@/types/filter.type";

export function createFilteresQueryString(
  data: Record<string, SelectedFilterItem>
) {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(data)) {
    const { from, to, selected } = value;

    if (from || to) {
      query.append(key, `${from}-${to}`);
    } else if (selected.length) {
      query.append(key, selected.join(","));
    }
  }
  return query.toString();
}

export function initFilters(filters: Filter[]): Filter[] {
  return [
    {
      name: "Цена",
      key: "price",
      type: "value",
      id: 0,
      options: [],
      properties: {},
    },
    ...filters,
  ];
}
