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
import useDebouncedFunction from "../../shared/lib/react/debounce";

type Props = {
  catId: number;
  pathname: string;
  savedSearchParams?: Record<string, string>;
};

export default function Filters({ catId, savedSearchParams, pathname }: Props) {
  const [items, setItems] = useState<Filter[]>([]);
  const [disabled, setDisabled] = useState(true);

  const fetchItems = useCallback(async () => {
    setDisabled(true);
    const { filters } = await getCategoryFilters(catId, savedSearchParams);

    setItems(filters);

    setTimeout(() => {
      setDisabled(false);
    }, 500);
  }, [catId, savedSearchParams]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  useFiltersStore(savedSearchParams);

  const { filtersApply, clearFilters } = useFiltersNavigate(pathname);

  const f = useCallback(() => {
    filtersApply()
    fetchItems();
  }, [fetchItems, filtersApply]);

  const debounceChange = useMemo(() => {
    return debounce(f, 1000)

  }, [f]);

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
            // fetchItems();
            clearFilters();
          }}
        >
          Сбросить
        </Button>
      </div>
      {/* <pre style={{ fontSize: "11px" }}>{JSON.stringify(filters, null, 2)}</pre> */}
    </div>
  );
}
