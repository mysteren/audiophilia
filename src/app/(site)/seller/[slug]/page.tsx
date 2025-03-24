import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/features/breadcrumbs";
import SellerInfo from "@/features/seller-info";
import TextContent from "@/features/text-content";
import { ApiResponseError } from "@/shared/api/http/errors";

import { getSeller } from "@/entities/seller";
import CardAdRow from "@/widgets/card-ad-row";
import { Pagination } from "@/widgets/pagination/pagination";
import styles from "./page.module.css";

// обновлять кеш каждые 15 секунд
export const revalidate = 15;

const limit = 24;

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<Record<string, string>>;
};

async function fetchData(
  slug: string,
  searchParams: Record<string, string>,
  limit: number
) {
  try {
    const result = await getSeller(slug, searchParams, limit);
    return result;
  } catch (e) {
    console.error(e);
    if (e instanceof ApiResponseError && e.responseErrorData.status === 404) {
      notFound();
    }
  }
}

export async function generateMetadata(props: Props) {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;
  const { seller } = await fetchData(slug, searchParams, limit);
  const { metaTitle: title, metaDescription: description } = seller;
  return {
    title,
    description,
    alternates: {
      canonical: `/seller/${slug}`,
    },
  };
}

export default async function Page(props: Props) {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;
  const data = await fetchData(slug, searchParams, limit);
  const { seller, products } = data;
  const { title, text } = seller;

  const productCards = products.map((product) => (
    <CardAdRow key={`pc-${product.id}`} product={product} />
  ));

  return (
    <>
      <div className={styles.top}>
        <Breadcrumbs
          items={[{ title: "Главная", href: "/" }, { title: title }]}
        />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.body}>
        <div>
          
          <div className={styles.content}>
            <TextContent content={text} />
          </div>

          <h2>Предложения</h2>
          <div className={`${styles.products}`} id="products">
            {products.length ? (
              productCards
            ) : (
              <p>В данной категории пока не товаров</p>
            )}
          </div>
          <Pagination itemsCount={products.length} limit={limit} />
        </div>
        <div className={styles.stickyBar}>
          <div className={styles.stickyBlock}>
            <SellerInfo seller={seller} />
            <div className={styles.anchorButtons}>
              <Link className={styles.anchorButton} href="#">
                Описание
              </Link>
              <Link className={styles.anchorButton} href="#products">
                Предложения
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
