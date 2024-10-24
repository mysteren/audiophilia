import { ReactNode, useEffect, useState } from "react";
import styles from './aside-container.module.css'

type Props = {
  children?: ReactNode;
};

export default function AsideContainer({
  children,
}: Props) {
  return (
    <div
      className={styles.root}
    >
      {children}
    </div>
  );
}
