import { LinkItemData } from "@/entities/site-settings/types";
import styles from "./bottom-header-menu.module.css";
import Link from "next/link";

type Props = {
  items: LinkItemData[];
};

export function BottomHeaderMenu({ items }: Props) {
  return (
    <div className={styles.container}>
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
