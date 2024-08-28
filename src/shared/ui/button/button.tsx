import { ReactNode } from "react";
import styles from "./button.module.css";
import clsx from "clsx";

type Variants = "primary" | "green" | "red" | undefined;

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
      className={clsx(styles.button, styles?.[String(variant)])}
    >
      {children}
    </button>
  );
}
