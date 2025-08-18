import { getCategory } from "@/entities/category";
import { Breadcrumbs } from "@/features/breadcrumbs";
import TextContent from "@/features/text-content";
import TopNav from "@/features/top-nav";
import { ApiResponseError } from "@/shared/api/http/errors";
import CardRow from "@/widgets/card-row/card-row";
import PageModals from "@/widgets/page-modals/page-modals";
import { Pagination } from "@/widgets/pagination/pagination";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

const page = "";
const limit = 24;

// обновлять кеш каждые 15 секунд

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<Record<string, string>>;
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

export const revalidate = 15;

export async function generateMetadata(props: Props) {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;
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

export default async function Page(props: Props) {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;

  const data = await fetchData(slug, searchParams, page, limit);

  const {
    products,
    category,
    parents,
    childrens,
    searchParams: savedSearchParams,
  } = data;

  // const isAd = isAdByCategories([category, ...parents]);

  const mainCategory = category.type === "filtered" ? parents[0] : category;

  const pathname = `/category/${mainCategory.slug}`;

  const text = category.text;

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

  const showSubcategories = !!subcategories.length;

  return (
    <>
      <div className={styles.top}>
        <TopNav />
        <Breadcrumbs
          items={[
            { title: "Главная", href: '/' },
            ...parents.reverse().map(({ title, slug }) => {
              return { title, href: `/category/${slug}` };
            }),
            { title: category.title },
          ]}
        />
      </div>
      <h1 className={styles.title}>{category.title}</h1>
      <div className={styles.main}>
        {/* <aside className={styles.aside}>
          <div className={`${styles.aside__container}`}>
            {showSubcategories && (
              <AsideContainer>
                <h2>Категории</h2>
                <ul className={styles.categories}>{subcategories}</ul>
              </AsideContainer>
            )}

            <Filters
              categryId={mainCategory.id}
              pathname={pathname}
              savedSearchParams={savedSearchParams ?? searchParams}
            />
          </div>
        </aside> */}
        <section className={styles.section}>
          <div className={`${styles.products}`}>
            {products.length ? (
              productCards
            ) : (
              <p>В данной категории пока не товаров</p>
            )}
          </div>
          <Pagination itemsCount={products.length} limit={limit} />
        </section>
      </div>
      <div>
        <TextContent content={text} />
      </div>
      <PageModals />
    </>
  );
}
