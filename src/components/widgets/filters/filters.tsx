"use client";
import ButtonPrimary from "@/components/ui/button-primary";
import { Filter } from "@/types/categoryFilter";
import { FilterElement } from "./components/filter-element/filter-element";
import styles from "./filter.module.css";
import { useSelectedFiltersStore } from "@/store/selected-filters/selected-filters";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  items: Filter[];
};

export default function Filters({ items }: Props) {
  const { initFilters, filters } = useSelectedFiltersStore();
  const router = useRouter();
  const pathname = usePathname();
  console.log({ pathname, router });

  const clearFilters = () => {
    initFilters(
      items.map(({ key }) => {
        return key;
      })
    );
  };

  const filtersApply = () => {
    // console.log("todo filters apply", filters);

    const query = new URLSearchParams();

    for (const [key, value] of Object.entries(filters)) {
      console.log([key, value]);
      const { from, to, selected } = value;

      if (from || to) {
        query.append(key, `${from}-${to}`);
      } else if (selected.length) {
        query.append(key, selected.join(","));
      }
    }



    router.push(`${pathname}?${query.toString()}`)

    // alert(query.toString());
  };

  useEffect(() => {
    // console.log("Filters");
    initFilters(
      items.map(({ key }) => {
        return key;
      })
    );
  }, [initFilters, items]);

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
      <pre style={{ fontSize: "11px" }}>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}
