import { CategoryItem } from "@/shared/types/categoryItem";
import Link from "next/link";

type Props = {
  items: CategoryItem[];
  level?: number;
};

export function CategoriesTree({ items, level }: Props) {
  const lv = level ?? 0;
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={`catalog-menu-${lv}-${index}`}>
            <Link href={`/category/${item.slug}`}>{item.title}</Link>
            {item.children && (
              <CategoriesTree level={lv + 1} items={item.children} />
            )}
          </li>
        );
      })}
    </ul>
  );
}
