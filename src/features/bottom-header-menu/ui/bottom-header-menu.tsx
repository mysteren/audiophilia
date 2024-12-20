import Link from "next/link";
import { useData } from "../model/hooks";
import styles from "./bottom-header-menu.module.css";

export function BottomHeaderMenu() {
  const { items } = useData();

  return (
    <div className={styles.root}>
      <nav className={`container`}>
        <ul className={styles.list}>
          {items.map((item, i) => {
            return (
              <li key={`headMenu2Item-${i}`}>
                <Link className={styles.link} href={item.href}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
