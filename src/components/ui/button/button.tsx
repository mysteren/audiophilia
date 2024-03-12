import { ReactNode } from "react";
import styles from "./button.module.css";

type Variants = "primary" | undefined;

type Props = {
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: Variants;
};

export default function Button({
  children,
  onClick,
  variant,
  disabled,
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${styles.button} ${styles?.[String(variant)]}`}
    >
      {children}
    </button>
  );
}
