"use client";
import { getCategoryFilters } from "@/entities/category";
import { debounce } from "@/shared/lib/react/debounce";
import { Filter } from "@/shared/types/categoryFilter";
import Button from "@/shared/ui/button/button";
import clsx from "clsx";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FilterElement } from "./components/filter-element/filter-element";
import styles from "./filter.module.css";
import { useFiltersNavigate, useFiltersStore } from "./hooks";
import AsideContainer from "@/shared/ui/aside-container/aside-container";

type Props = {
  categryId: number;
  pathname: string;
  savedSearchParams?: Record<string, string>;
};

export default function Filters({
  categryId,
  savedSearchParams,
  pathname,
}: Props) {
  const [items, setItems] = useState<Filter[]>([]);
  const [disabled, setDisabled] = useState(true);

  // const fetchItems = useCallback(async (categryId, savedSearchParams) => {
  //   setDisabled(true);
  //   getCategoryFilters(categryId, savedSearchParams).then(({ filters }) => {
  //     setItems(filters);
  //     setDisabled(false);
  //   });
  // }, []);

  useEffect(() => {
    setDisabled(true);
    getCategoryFilters(categryId, savedSearchParams).then(({ filters }) => {
      setItems(filters);
      setDisabled(false);
    });
  }, [categryId, savedSearchParams]);

  useFiltersStore(savedSearchParams);

  const { filtersApply, clearFilters } = useFiltersNavigate(pathname);

  // const onChange = useCallback(() => {
  //   filtersApply();
  // }, [filtersApply]);

  const debounceChange = useMemo(() => {
    return debounce(filtersApply, 1000);
  }, [filtersApply]);

  if (!items.length) {
    return;
  }

  return (
    <AsideContainer>
      <ul
        className={clsx(
          styles.list,
          "scroll",
          disabled ? styles.disabled : null
        )}
      >
        {items.map((item) => {
          const { id } = item;
          if (item.type === "select" && !item.options.length) {
            return;
          }
          return (
            <li key={`filter-${id}`}>
              <FilterElement item={item} onChange={() => debounceChange()} />
            </li>
          );
        })}
      </ul>

      <div className={styles.bottom}>
        <Button
          variant="primary"
          onClick={() => {
            setDisabled(true);
            filtersApply();
          }}
        >
          Применить
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            setDisabled(true);
            clearFilters();
          }}
        >
          Сбросить
        </Button>
      </div>
    </AsideContainer>
  );
}
