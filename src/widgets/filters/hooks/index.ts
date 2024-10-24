import { createFilteresQueryString } from "@/entities/filter";
import { useSelectedFiltersStore } from "@/shared/store/selected-filters/selected-filters";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

export function useFiltersStore(savedSearchParams?: Record<string, string>) {
  const urlSearchParams = useSearchParams();

  const { initFilters } = useSelectedFiltersStore();

  useEffect(() => {
    const searchParams =
      savedSearchParams ?? Object.fromEntries(urlSearchParams.entries());

    const selectedFilters = [];

    for (const key in searchParams) {
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
      selectedFilters.push({ key, options, from, to });
    }
    initFilters(selectedFilters);
  }, [initFilters, savedSearchParams, urlSearchParams]);
}

export function useFiltersNavigate(pathname: string) {
  const router = useRouter();
  const clearFilters = useCallback(() => {
    router.push(pathname);
  }, [router, pathname]);

  const filtersApply = useCallback(() => {
    const filters = useSelectedFiltersStore.getState().filters;
    const query = createFilteresQueryString(filters);
    router.push(`${pathname}?${query.toString()}`, { scroll: false });
  }, [pathname, router]);

  return { clearFilters, filtersApply };
}
