import { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import styles from "./input-string.module.css";

type Status = "error" | "";

type Props = {
  value: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  status?: Status;
  onChange?: (value: string) => void;
  transformer?: (val: string) => string;
};

export function InputString({
  placeholder,
  value,
  type,
  onChange,
  transformer,
  status,
  disabled,
}: Props) {
  const [val, setVal] = useState(value);

  useEffect(() => {
    setVal(value);
  }, [value]);

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    if (transformer) {
      setVal(transformer(value));
    } else {
      setVal(value);
    }
  }

  function blurHandler(e: FocusEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(val);
    }
  }

  return (
    <input
      onChange={changeHandler}
      onBlur={blurHandler}
      className={`${styles.input} ${status === 'error' ? styles.error : ''}`}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      value={val}
    />
  );
}
