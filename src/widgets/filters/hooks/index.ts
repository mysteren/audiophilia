import { createFilteresQueryString } from "@/entities/filter";
import { useSelectedFiltersStore } from "@/shared/store/selected-filters/selected-filters";
import { Filter } from "@/shared/types/categoryFilter";
import {
  SelectedFilterItem,
  SelectedFiltersState,
} from "@/shared/types/filter.type";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function useFiltersStore(
  savedSearchParams?: Record<string, string>
) {
  const urlSearchParams = useSearchParams();

  const { initFilters } = useSelectedFiltersStore();


  console.log("render");

  useEffect(() => {
    console.log("render effect");

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

  // useEffect(() => {
  //   const searchParams =
  //     savedSearchParams ?? Object.fromEntries(urlSearchParams.entries());
  //   initFilters(
  //     items.map(({ key }) => {
  //       const params = searchParams[key];
  //       let to, from: string | undefined;
  //       let options: string[] | undefined;

  //       if (params) {
  //         if (/-/.test(params)) {
  //           [from, to] = params.split("-");
  //         } else {
  //           options = params.split(",");
  //         }
  //       }

  //       return { key, options, from, to };
  //     })
  //   );
  // }, [initFilters, urlSearchParams, savedSearchParams, items]);
}

export function useFiltersNavigate(pathname: string) {

  const router = useRouter();
  const clearFilters = () => {
    router.push(pathname);
  };

  const filtersApply = useCallback(() => {
    
    const filters = useSelectedFiltersStore.getState().filters;
    console.log('filtersApply', filters);
    const query = createFilteresQueryString(filters);
    router.push(`${pathname}?${query.toString()}`);
  }, [pathname, router]);

  return { clearFilters, filtersApply };
}
