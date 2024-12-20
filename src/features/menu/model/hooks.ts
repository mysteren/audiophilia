import { CategoryTreeItem } from "@/shared/types/categoryItem";
import { MenuTreeItem, UrlPrefix } from "../types";
import { useEffect, useState } from "react";
import { getCategoryTree } from "@/entities/category";

function toMenuItem(
  items: CategoryTreeItem[],
  urlPrefix: UrlPrefix
): MenuTreeItem[] {
  return items.map((item) => {
    return {
      ...item,
      urlPrefix,
      children: toMenuItem(item.children, urlPrefix),
    };
  });
}


export function useData() {
  const [items, setItems] = useState<MenuTreeItem[]>([]);

  useEffect(() => {
    async function getData() {
      const data = await getCategoryTree();
      setItems([
        {
          title: "Каталог",
          slug: "",
          urlPrefix: "",
          children: toMenuItem(data, "category"),
        },
        {
          title: "Журнал",
          slug: "journal",
          urlPrefix: "",
          children: [],
        },
        {
          title: "Контакты",
          slug: "contacts",
          urlPrefix: "page",
          children: [],
        },
      ]);
    }
    getData();
  }, []);

  return { items };
}

export function useSelectedItem() {
  const [subItems, setSubItems] = useState<MenuTreeItem[]>([]);
  const [active, setActive] = useState<string | number>();

  const handleOnMouse = (
    event: React.MouseEvent<HTMLElement>,
    item: MenuTreeItem,
    key: string | number
  ) => {
    event.preventDefault();
    setActive(key);
    setSubItems(item.children);
  };

  return { handleOnMouse, subItems, active };
}