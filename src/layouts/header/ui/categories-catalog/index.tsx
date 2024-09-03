"use client";
import { useState } from "react";
import Link from "next/link";

import { CategoryItem } from "@/shared/types/categoryItem";
import SubCategory from "./sub-category";

import styles from "./index.module.css";

type Props = {
  items: CategoryItem[];
};

export function CategoriesCatalog({ items }: Props) {
  const [selectedItem, setSelectedItem] = useState<CategoryItem | null>(null);
  const [slugClass, setSlugClass] = useState<string>();

  const handleOnMouse = (
    event: React.MouseEvent<HTMLElement>,
    item: CategoryItem
  ) => {
    event.preventDefault();
    setSelectedItem(item);
    setSlugClass(item.slug);
  };

  return (
    <>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li
            className={`${styles.item} ${
              slugClass === item.slug ? `${styles.itemActive}` : ""
            }`}
            key={index}
            onMouseEnter={(event) => handleOnMouse(event, item)}
          >
            <Link className={styles.link} href={`/category/${item.slug}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className={`${styles.subMenu} container`}>
        <SubCategory selectedItem={selectedItem} />
      </div>
    </>
  );
}
