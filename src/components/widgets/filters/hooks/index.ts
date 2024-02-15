import { createFilteresQueryString } from "@/services/filters";
import { useSelectedFiltersStore } from "@/store/selected-filters/selected-filters";
import { Filter } from "@/types/categoryFilter";
import { SelectedFiltersState } from "@/types/filter.type";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export function useFiltersStore(items: Filter[]) {
  const searchParams = useSearchParams();
  const { initFilters, filters } = useSelectedFiltersStore();

  useEffect(() => {
    initFilters(
      items.map(({ key }) => {
        const params = searchParams.get(key);
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
  }, [initFilters, items, searchParams]);
  return {
    filters,
  };
}

export function useFiltersNavigate(filters: SelectedFiltersState) {
  const router = useRouter();
  const pathname = usePathname();

  const clearFilters = () => {
    router.push(pathname);
  };

  const filtersApply = () => {
    const query = createFilteresQueryString(filters);
    router.push(`${pathname}?${query.toString()}`);
  };

  return { clearFilters, filtersApply };
}
