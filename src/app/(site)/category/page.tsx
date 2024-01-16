/* eslint-disable react/jsx-key */
import React from "react";
import styles from "./page.module.css";
import { ApiClientInstance } from "@/lib/api/api-client";
import Link from "next/link";

type CategoryItem = {
  title: string;
  slug: string;
  children: CategoryItem[];
};

function CategoriesTree(items: CategoryItem[]) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <Link href={`category/${item.slug}`}>{item.title}</Link>
            {item.children && CategoriesTree(item.children)}
          </li>
        );
      })}
    </ul>
  );
}

export default async function Page() {
  const data: CategoryItem[] = await ApiClientInstance.getCategoryTree();

  return (
    <>
      <h1>Каталог</h1>
      {data && CategoriesTree(data)}
      {/* <div>
        <p>Текст</p>
      </div> */}
      {/* <pre>
      { JSON.stringify(data, null, "\t") }
      </pre> */}
    </>
  );
}
