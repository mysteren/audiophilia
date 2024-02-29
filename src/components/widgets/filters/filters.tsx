"use client";
import { Filter } from "@/types/categoryFilter";
import { FilterElement } from "./components/filter-element/filter-element";
import styles from "./filter.module.css";
import { useFiltersNavigate, useFiltersStore } from "./hooks";
import Button from "@/components/ui/button/button";
import { usePathname } from "next/navigation";

type Props = {
  items: Filter[];
  pathname: string;
  savedSearchParams?: Record<string, string>;
};

export default function Filters({ items, savedSearchParams, pathname }: Props) {

  const { filters } = useFiltersStore(items, savedSearchParams);

  const { filtersApply, clearFilters } = useFiltersNavigate(filters, pathname);

  return (
    <div>
      <h2>Фильтры</h2>
      <div>
        <ul className={styles.list}>
          {items &&
            items.map((item) => {
              const { name, id } = item;
              return (
                <li key={`filter-${id}`}>
                  <h3>{name}</h3>
                  <FilterElement item={item} />
                </li>
              );
            })}
        </ul>
      </div>
      <div className={styles.bottom}>
        <Button variant="primary" onClick={filtersApply}>
          Применить
        </Button>
        <Button variant="primary" onClick={clearFilters}>
          Сбросить
        </Button>
      </div>
      {/* <pre style={{ fontSize: "11px" }}>{JSON.stringify(filters, null, 2)}</pre> */}
    </div>
  );
}
