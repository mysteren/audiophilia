import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Text } from "@/components/ui/text";
import Card from "@/components/widgets/card/card";
import Filters from "@/components/widgets/filters/filters";
import { Pagination } from "@/components/widgets/pagination/pagination";
import { getCategory } from "@/services/category";
import { initFilters } from "@/services/filters";
import { CategoryData } from "@/types/category";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import PageModals from "@/components/widgets/page-modals/page-modals";

// обновлять кеш каждые 15 секунд
export const revalidate = 15;

type Props = {
  params: {
    slug: string;
  };
  searchParams: Record<string, string>;
};

export async function generateMetadata({
  params: { slug },
  searchParams,
}: Props) {
  const data: CategoryData = await getCategory(slug, searchParams);

  const { category } = data;

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: {
      canonical: `/category/${slug}`,
    },
  };
}

export default async function Page({ params: { slug }, searchParams }: Props) {
  const data: CategoryData = await getCategory(slug, searchParams);
  const {
    products,
    category,
    parents,
    childrens,
    searchParams: savedSearchParams,
  } = data;

  const filters = initFilters(data.filters);

  const pathname =
    category.type === "filtered"
      ? `/category/${parents[0].slug}`
      : `/category/${category.slug}`;

  const productCards = products.map((product) => (
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
            <Filters
              pathname={pathname}
              items={filters}
              savedSearchParams={savedSearchParams}
            />
          </div>
        </aside>
        <section className={styles.section}>
          <div className={`${styles.products}`}>{productCards}</div>
          <Pagination itemsCount={products.length} limit={12} />
        </section>
      </div>
      <div>
        <Text>{category.text}</Text>
      </div>
      <PageModals />
    </>
  );
}
