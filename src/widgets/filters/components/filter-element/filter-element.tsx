"use client";

import { Filter, FilterType } from "@/shared/types/categoryFilter";
import styles from "./filter-element.module.css";
import { Checkbox } from "@/shared/ui/checkbox/checkbox";
import { InputNumber } from "@/shared/ui/input-number/input-number";
import { useSelectedFiltersStore } from "@/shared/store/selected-filters/selected-filters";
import { useState } from "react";
import ArrowIcon from "@/shared/ui/icons/arrow";
import clsx from "clsx";
type Props = {
  item: Filter;
  onChange: () => void;
};

export function FilterElement({ item, onChange }: Props) {
  const { type, options, key, name } = item;
  const { filters, setFrom, setTo, setSelected } = useSelectedFiltersStore();
  const [showOptions, setShowOptions] = useState(true);
  const selectedFilter = filters[key];
  const properties = () => {
    switch (type) {
      case FilterType.select:
        return (
          <div className={`${styles.options} scroll`}>
            {options &&
              showOptions &&
              options.map(({ name, value, pCount }, i) => {
                const checked = selectedFilter?.selected.includes(value);
                const disabled = !checked && pCount === 0;
                return (
                  <label
                    className={clsx(
                      styles.option,
                      disabled ? styles.disabled : ""
                    )}
                    key={`option-${key}-${i}`}
                  >
                    <Checkbox
                      value={checked}
                      disabled={disabled}
                      onChange={(val) => {
                        setSelected(key, value, val);
                        onChange();
                      }}
                    />
                    <span className={styles.optionName}>{name}</span>
                    <span className={styles.optionCount}>{pCount}</span>
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
                onChange();
              }}
              value={selectedFilter?.from ?? ""}
            />
            <InputNumber
              placeholder="до"
              onChange={(val) => {
                setTo(key, val);
                onChange();
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
