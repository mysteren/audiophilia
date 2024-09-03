import { createFilteresQueryString } from "@/entities/filter";
import { useSelectedFiltersStore } from "@/shared/store/selected-filters/selected-filters";
import { Filter } from "@/shared/types/categoryFilter";
import { SelectedFiltersState } from "@/shared/types/filter.type";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function useFiltersStore(
  items: Filter[],
  savedSearchParams?: Record<string, string>
) {
  const urlSearchParams = useSearchParams();

  const { initFilters, filters } = useSelectedFiltersStore();

  useEffect(() => {
    const searchParams =
      savedSearchParams ?? Object.fromEntries(urlSearchParams.entries());
    initFilters(
      items.map(({ key }) => {
        const params = searchParams[key];
        let to, from: string | undefined;
        let options: string[] | undefined;

        if (params) {
          if (/-/.test(params)) {
            [from, to] = params.split("-");
          } else {
            options = params.split(",");
          }
        }

        return { key, options, from, to };
      })
    );
  }, [initFilters, items, urlSearchParams, savedSearchParams]);
  return {
    filters,
  };
}

export function useFiltersNavigate(filters: SelectedFiltersState, pathname: string) {
  const router = useRouter();
  const clearFilters = () => {
    router.push(pathname);
  };

  const filtersApply = () => {
    const query = createFilteresQueryString(filters);
    router.push(`${pathname}?${query.toString()}`);
  };

  return { clearFilters, filtersApply };
}
