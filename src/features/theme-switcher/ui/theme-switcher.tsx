"use client";

import styles from "./theme-switcher.module.css";

export default function ThemeSwitcher() {
  return (
    <div className={styles.root}>
      <span>Тема:</span>
      <button
        onClick={() => {
          localStorage.removeItem("theme");
          const mq = window.matchMedia("(prefers-color-scheme: dark)");
          document.documentElement.setAttribute(
            "data-theme",
            mq.matches ? "dark" : "light"
          );
        }}
      >
        авто
      </button>
      <button
        onClick={() => {
          const theme = "light";
          localStorage.setItem("theme", theme);
          document.documentElement.setAttribute("data-theme", theme);
        }}
      >
        светлая
      </button>{" "}
      <button
        onClick={() => {
          const theme = "dark";
          localStorage.setItem("theme", theme);
          document.documentElement.setAttribute("data-theme", theme);
        }}
      >
        темная
      </button>
    </div>
  );
}