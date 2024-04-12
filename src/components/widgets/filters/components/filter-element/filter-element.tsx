"use client";

import { Filter, FilterType } from "@/types/categoryFilter";
import styles from "./filter-element.module.css";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { InputNumber } from "@/components/ui/input-number/input-number";
import { useSelectedFiltersStore } from "@/store/selected-filters/selected-filters";
import { useState } from "react";
import ArrowIcon from "@/components/icons/arrow";
type Props = {
  item: Filter;
};

export function FilterElement({ item }: Props) {
  const { type, options, key, name } = item;
  const { filters, setFrom, setTo, setSelected } = useSelectedFiltersStore();
  const [showOptions, setShowOptions] = useState(false);
  const selectedFilter = filters[key];
  const properties = () => {
    switch (type) {
      case FilterType.select:
        return (
          <div className={`${styles.options} scroll`}>
            {options &&
              showOptions &&
              options.map(({ name, value }, i) => {
                const checked = selectedFilter?.selected.includes(value);
                return (
                  <label className={styles.option} key={`option-${key}-${i}`}>
                    <Checkbox
                      value={checked}
                      onChange={(val) => {
                        setSelected(key, value, val);
                      }}
                    />
                    <span className={styles.optionName}>{name}</span>
                  </label>
                );
              })}
          </div>
        );
      case FilterType.value:
        return (
          <div className={styles.range}>
            <InputNumber
              placeholder="от"
              onChange={(val) => {
                setFrom(key, val);
              }}
              value={selectedFilter?.from ?? ""}
            />
            <InputNumber
              placeholder="до"
              onChange={(val) => {
                setTo(key, val);
              }}
              value={selectedFilter?.to ?? ""}
            />
          </div>
        );
      default:
        return;
    }
  };

  return (
    <>
      <div className={styles.top} onClick={() => setShowOptions(!showOptions)}>
        <span className={styles.title}>{name}</span>
        <button
          className={`${styles.toggle} ${showOptions ? styles.show : ""}`}
        >
          <ArrowIcon />
        </button>
      </div>
      {showOptions && properties()}
    </>
  );
}
