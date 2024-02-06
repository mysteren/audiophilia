import { CategoryItem } from "@/types/categoryItem";
import Link from "next/link";

type Props = {
  items: CategoryItem[]
}

export function CategoriesTree({ items }: Props) {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <Link href={`/category/${item.slug}`}>{item.title}</Link>
            {item.children && <CategoriesTree items={item.children} />}
          </li>
        );
      })}
    </ul>
  );
}
