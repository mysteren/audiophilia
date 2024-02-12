import ButtonPrimary from "@/components/ui/button-primary";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { InputNumber } from "@/components/ui/input-number/input-number";
import { Filter, FilterType } from "@/types/categoryFilter";
import styles from './filter.module.css';

type Props = {
  items: Filter[];
};

function FilterElement({ item }: { item: Filter }) {
  const { type, options, key } = item;
  switch (type) {
    case FilterType.select:
      return (
        <div className={styles.options}>
          {options &&
            options.map(({ name, value }, i) => {
              return (
                <label key={`option-${key}-${i}`}>
                  <Checkbox />
                  <span>{name}</span>
                </label>
              );
            })}
        </div>
      ); 
    case FilterType.value:
      return (
        <div className={styles.range}>
          <InputNumber placeholder="от" />
          <InputNumber placeholder="до"/>
        </div>
      );
    default:
      return <p>type: {type}</p>;
  }

  // if (type === FilterType.select) {
  //   return (
  //     <div>
  //       <p>sdfdsfsd</p>
  //     </div>
  //   );
  // }
}

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
