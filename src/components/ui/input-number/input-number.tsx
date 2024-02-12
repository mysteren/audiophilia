import styles from "./input-number.module.css";

type Props = {
  value?: number;
  min?: number;
  max?: number;
  placeholder?: string;
};

export function InputNumber({ placeholder, value, min, max }: Props) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      min={min}
      max={max}
      type="number"
      value={value}
    />
  );
}
