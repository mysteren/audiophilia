"use client";
import { ReactNode, useState } from "react";
import styles from "./modal-window.module.css";

type Props = {
  children: ReactNode;
  show: boolean;
  onClose: () => void
};

export default function ModalWindow({ children, show, onClose }: Props) {

  return (
    <div className={`${styles.wrap} ${show && styles.show}`}>
      <div className={styles.window}>
        <button
          className={styles.close}
          onClick={onClose}
        >
          ×
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
