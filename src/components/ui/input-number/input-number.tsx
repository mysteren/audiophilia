import { ChangeEvent, useEffect, useState } from "react";
import styles from "./input-number.module.css";

type Props = {
  value: string;
  min?: number;
  max?: number;
  placeholder?: string;
  onChange?: (value: string) => void;
};

export function InputNumber({ placeholder, value, min, max, onChange }: Props) {

  const [val, setVal] = useState(value);

  useEffect(() => {
    setVal(value);
  }, [value])

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    if (onChange) {
      onChange(value);
    }
  }

  return (
    <input
      onChange={changeHandler}
      onBlur={changeHandler}
      className={styles.input}
      placeholder={placeholder}
      min={min}
      max={max}
      type="number"
      value={val}
    />
  );
}
