// Next modules
import Link from "next/link";

// Styles
import styles from "./header.module.css";

// Types
import { CategoryItem } from "@/types/categoryItem";


// Layouts
import WrapperHeader from "../wrapper-header/wrapper-header";
import { getCategoryTree } from "@/services/category";
import { getHeaderSettingsData } from "@/services/site-settings";

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
  const [data, settingsData] = await Promise.all([
    getCategoryTree(),
    getHeaderSettingsData(),
  ]);
  const { headMenu2 } = settingsData;
  const categoryMenu = CategoriesTree(data);

  return (
    <header className={styles.header}>
      <WrapperHeader headerMenu2={headMenu2}>
        {categoryMenu}
        {''}
      </WrapperHeader>
    </header>
  );
}
