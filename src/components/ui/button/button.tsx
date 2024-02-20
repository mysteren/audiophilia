import { ReactNode } from "react";
import styles from "./button.module.css";

type Variants = "primary" | undefined;

type Props = {
  children?: ReactNode;
  onClick?: () => void;
  variant?: Variants;
};

export default function Button({ children, onClick, variant }: Props) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles?.[String(variant)]}`}
    >
      {children}
    </button>
  );
}
