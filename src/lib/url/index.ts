import { SelectedFilterItem } from "@/types/filter.type";

export function toSearchString(data: Record<string, string | number>) {
  const url = new URLSearchParams(data as Record<string, string>);
  return url.toString();
}

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
