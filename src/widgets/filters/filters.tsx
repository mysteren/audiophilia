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
  console.log("sfsdfsdfsd");

  const [items, setItems] = useState<Filter[]>([]);
  const [disabled, setDisabled] = useState(true);

  const fetchItems = useCallback(async (categryId, savedSearchParams) => {
    console.log("callback", categryId, savedSearchParams);
    setDisabled(true);
    const { filters } = await getCategoryFilters(categryId, savedSearchParams);

    setItems(filters);
    setDisabled(false);
    // setTimeout(() => {
    //   setDisabled(false);
    // }, 300);
  }, []);

  useEffect(() => {
    // console.log("effect fetchItems");
    // fetchItems(categryId, savedSearchParams);

    setDisabled(true);

    getCategoryFilters(categryId, savedSearchParams).then(({ filters }) => {
      setItems(filters);
      setDisabled(false);
    });
  }, [categryId, savedSearchParams]);

  useFiltersStore(savedSearchParams);

  const { filtersApply, clearFilters } = useFiltersNavigate(pathname);

  const onChange = useCallback(() => {
    filtersApply();
    fetchItems(categryId, savedSearchParams);
  }, [fetchItems, filtersApply, categryId, savedSearchParams]);

  const debounceChange = useMemo(() => {
    return debounce(onChange, 1000);
  }, [onChange]);

  return (
    <div className={styles.container}>
      <ul
        className={clsx(
          styles.list,
          "scroll",
          disabled ? styles.disabled : null
        )}
      >
        {items &&
          items.map((item) => {
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
            filtersApply();
          }}
        >
          Применить
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            clearFilters();
          }}
        >
          Сбросить
        </Button>
      </div>
    </div>
  );
}
