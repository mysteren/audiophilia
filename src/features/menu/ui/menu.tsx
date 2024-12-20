"use client";
import Link from "next/link";
import { useData, useSelectedItem } from "../model/hooks";
import styles from "./menu.module.css";
import SubMenu from "./sub-menu";
import { MenuTreeItem } from "../types";
import { useIsMobile } from "@/shared/lib/media-query";

function Item({ item: { title, slug, urlPrefix } }: { item: MenuTreeItem }) {
  if (slug) {
    const href = urlPrefix ? `/${urlPrefix}/${slug}` : `/${slug}`;
    return (
      <Link className={styles.link} href={href}>
        {title}
      </Link>
    );
  }
  return <span className={styles.link}>{title}</span>;
}

export function Menu() {
  // const [selectedItem, setSelectedItem] = useState<CategoryItem | null>(null);
  // const [slugClass, setSlugClass] = useState<string>();

  const isMobile = useIsMobile();

  const { items } = useData();
  const { handleOnMouse, subItems, active } = useSelectedItem();

  return (
    <>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li
            className={`${styles.item} ${
              index === active ? `${styles.itemActive}` : ""
            }`}
            key={index}
            onMouseEnter={(event) => handleOnMouse(event, item, index)}
          >
            <Item item={item} />
            {isMobile && index === active && !!subItems.length && (
              <SubMenu items={subItems} />
            )}
          </li>
        ))}
      </ul>
      {!isMobile && (
        <div className={`${styles.subMenu} container`}>
          <SubMenu items={subItems} />
        </div>
      )}
    </>
  );
}
