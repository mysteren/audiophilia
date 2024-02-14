import { ReactNode } from "react";
import styles  from './styles.module.css'

type Props = {
  children: ReactNode;
  onClick?: () => void
};

export default function ButtonPrimary({ children, onClick }: Props) {
  return <button onClick={onClick} className={styles.button}>{children}</button>;
}