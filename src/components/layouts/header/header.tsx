// Next modules
import Link from "next/link";

// Styles
import styles from "./header.module.css";

// Types
import { CategoryItem } from "@/types/categoryItem";

// Api
import { ApiClientInstance } from "@/lib/api/api-client";

// Layouts
import WrapperHeader from "../wrapper-header/wrapper-header";

// Functions
function CategoriesTree(items: CategoryItem[]) {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <Link href={`category/${item.slug}`}>{item.title}</Link>
            {item.children && CategoriesTree(item.children)}
          </li>
        );
      })}
    </ul>
  );
}

export default async function Header() {
  const data: CategoryItem[] = await ApiClientInstance.getCategoryTree();

  const categoryMenu = CategoriesTree(data);

  return (
    <header className={styles.header}>
      <WrapperHeader>
        {categoryMenu}
        <h1>Lox</h1>
      </WrapperHeader>
    </header>
  );
}
