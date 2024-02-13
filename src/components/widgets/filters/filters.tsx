import ButtonPrimary from "@/components/ui/button-primary";
import { Filter } from "@/types/categoryFilter";
import { FilterElement } from "./components/filter-element/filter-element";
import styles from "./filter.module.css";

type Props = {
  items: Filter[];
};

export default function Filters({ items }: Props) {
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
        <ButtonPrimary>Применить</ButtonPrimary>
        <ButtonPrimary>Сбросить</ButtonPrimary>
      </div>
    </div>
  );
}
