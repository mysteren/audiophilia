import {
  ChangeEvent,
  FocusEvent,
  FocusEventHandler,
  useEffect,
  useState,
} from "react";
import styles from "./input-string.module.css";

type Props = {
  value: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean; 
  onChange?: (value: string) => void;
  transformer?: (val: string) => string;
};

export function InputString({
  placeholder,
  value,
  type,
  onChange,
  transformer,
  disabled
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
      className={styles.input}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      value={val}
    />
  );
}
