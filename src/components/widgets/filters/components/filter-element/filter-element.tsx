import { Filter, FilterType } from "@/types/categoryFilter";
import styles from "./filter-element.module.css";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { InputNumber } from "@/components/ui/input-number/input-number";

type Props = {
  item: Filter;
};

export function FilterElement({ item }: Props) {
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
          <InputNumber placeholder="до" />
        </div>
      );
    default:
      return;
  }
}
