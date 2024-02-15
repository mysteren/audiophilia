"use client";
import ButtonPrimary from "@/components/ui/button-primary";
import { Filter } from "@/types/categoryFilter";
import { FilterElement } from "./components/filter-element/filter-element";
import styles from "./filter.module.css";
import { useFiltersNavigate, useFiltersStore } from "./hooks";

type Props = {
  items: Filter[];
};

export default function Filters({ items }: Props) {
  const { filters } = useFiltersStore(items);

  const { filtersApply, clearFilters } = useFiltersNavigate(filters);

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
        <ButtonPrimary onClick={filtersApply}>Применить</ButtonPrimary>
        <ButtonPrimary onClick={clearFilters}>Сбросить</ButtonPrimary>
      </div>
      {/* <pre style={{ fontSize: "11px" }}>{JSON.stringify(filters, null, 2)}</pre> */}
    </div>
  );
}
