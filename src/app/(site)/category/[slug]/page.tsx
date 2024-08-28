import { Breadcrumbs } from "@/shared/ui/breadcrumbs";
import { Text } from "@/shared/ui/text";
import CardRow from "@/widgets/card-row/card-row";
import Filters from "@/widgets/filters/filters";
import PageModals from "@/widgets/page-modals/page-modals";
import { Pagination } from "@/widgets/pagination/pagination";
import { ApiResponseError } from "@/shared/lib/http/errors";
import { getCategory } from "@/services/category";
import { initFilters } from "@/services/filters";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

const page = "";
const limit = 18;

// обновлять кеш каждые 15 секунд
export const revalidate = 15;

type Props = {
  params: {
    slug: string;
  };
  searchParams: Record<string, string>;
};

async function fetchData(
  slug: string,
  searchParams: Record<string, string>,
  page: string,
  limit: number
) {
  try {
    const result = await getCategory(slug, searchParams, page, String(limit));
    return result;
  } catch (e) {
    console.error(e);
    if (e instanceof ApiResponseError && e.responseErrorData.status === 404) {
      notFound();
    }
  }
}

export async function generateMetadata({
  params: { slug },
  searchParams,
}: Props) {
  const data = await fetchData(slug, searchParams, page, limit);

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
  const data = await fetchData(slug, searchParams, page, limit);

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
    <CardRow key={`pc-${product.id}`} product={product} />
  ));

  const subcategories = childrens.map(({ title, slug }) => {
    const to = `/category/${slug}`;
    return (
      <li key={`subcategory-${to}`}>
        <Link className={styles.category} href={to}>
          {title}
        </Link>
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
      <h1 className={styles.title}>{category.title}</h1>
      <div className={styles.main}>
        <aside className={styles.aside}>
          <div className={`${styles.aside__container}`}>
            {!!subcategories.length && (
              <>
                <h2>Категории</h2>
                <ul className={styles.categories}>{subcategories}</ul>
              </>
            )}
            <Filters
              pathname={pathname}
              items={filters}
              savedSearchParams={savedSearchParams}
            />
          </div>
        </aside>
        <section className={styles.section}>
          <div className={`${styles.products}`}>{productCards}</div>
          <Pagination itemsCount={products.length} limit={limit} />
        </section>
      </div>
      <div>
        <Text>{category.text}</Text>
      </div>
      <PageModals />
    </>
  );
}
