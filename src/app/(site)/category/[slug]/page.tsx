import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Text } from "@/components/ui/text";
import Card from "@/components/widgets/card/card";
import { ApiClientInstance } from "@/lib/api/api-client";
import { TypesProduct } from "@/types/product";
import Filters from "@/components/widgets/filters/filters";
import { Filter } from "@/types/categoryFilter";
import styles from "./page.module.css";
import { initFilters } from "@/services/filters";

// обновлять кеш каждые 3 секунд
export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
  searchParams: Record<string, string>;
};

type Сategory = {
  title: string;
  slug: string;
  text: string;
};

type CategoryElement = {
  title: string;
  slug: string;
};

type CategoryData = {
  category: Сategory;
  products: TypesProduct[];
  parents: CategoryElement[];
  childrens: CategoryElement[];
  filters: Filter[];
};

export default async function Page({ params: { slug }, searchParams }: Props) {
  try {
    const data: CategoryData = await ApiClientInstance.getCategory(
      slug,
      searchParams
    );
    const { products, category, parents, childrens } = data;

    const filters = initFilters(data.filters);

    const productCards = products.map((product: TypesProduct) => (
      <Card key={`pc-${product.id}`} product={product} />
    ));

    const subcategories = childrens.map(({ title, slug }) => {
      const to = `/category/${slug}`;
      return (
        <li key={`subcategory-${to}`}>
          <Link href={to}>{title}</Link>
        </li>
      );
    });

    return (
      <>
        <div className={styles.top}>
          <Breadcrumbs
            items={[
              { title: "Каталог", href: "/category" },
              ...parents.reverse().map(({ title, slug }) => {
                return { title, href: `/category/${slug}` };
              }),
              { title: category.title },
            ]}
          />
        </div>
        <h1>{category.title}</h1>
        <div className={styles.main}>
          <aside className={styles.aside}>
            <div className={styles.aside__container}>
              <h2>Подкатегории</h2>
              <ul>{subcategories}</ul>
              <Filters items={filters} />
            </div>
          </aside>
          <section className={`${styles.products}`}>{productCards}</section>
        </div>
        <div>
          <Text>{category.text}</Text>
        </div>
      </>
    );
  } catch (e) {
    return notFound();
  }
}
