import { ReactNode } from "react";
import styles  from './styles.module.css'

type Props = {
  children: ReactNode;
};

export default function ButtonPrimary({ children }: Props) {
  return <button className={styles.button}>{children}</button>;
}