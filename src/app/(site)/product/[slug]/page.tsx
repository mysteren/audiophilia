import Link from "next/link";
import { notFound } from "next/navigation";

import { isAdByCategories } from "@/entities/category";
import { getProduct, getPropertyProps } from "@/entities/product";
import { Breadcrumbs } from "@/features/breadcrumbs";
import PropertyRowElement from "@/features/property-row";
import SellerInfo from "@/features/seller-info";
import TextContent from "@/features/text-content";
import ToCart from "@/features/to-cart/to-cart";
import { ApiResponseError } from "@/shared/api/http/errors";
import { PrintPrice } from "@/shared/lib/utils/price";
import { GetFileUrl } from "@/shared/lib/utils/url";
import NoImage from "@/shared/ui/noimage/noimage";
import CardSlider from "@/widgets/card-slider/card-slider";
import PageModals from "@/widgets/page-modals/page-modals";

import styles from "./page.module.css";
import TopNav from "@/features/top-nav";

// обновлять кеш каждые 15 секунд
export const revalidate = 15;

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function fetchData(slug: string) {
  try {
    const result = await getProduct(slug);
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

  const { product } = await fetchData(slug);
  const { metaTitle: title, metaDescription: description } = product;
  return {
    title,
    description,
    alternates: {
      canonical: `/product/${slug}`,
    },
  };
}

export default async function Page(props: Props) {
  const { slug } = await props.params;
  const data = await fetchData(slug);
  const { categories, product, filters, seller } = data;
  const { id, title, price, files, oldPrice, text } = product;

  const isAd = isAdByCategories(categories);

  const imagesSrcs = files.images.map((item) => {
    return GetFileUrl(item);
  });

  return (
    <>
      <div className={styles.top}>
        <TopNav />
        <Breadcrumbs
          items={[
            { title: "Каталог", href: "/category" },
            ...categories.reverse().map(({ title, slug }) => {
              return { title, href: `/category/${slug}` };
            }),
            { title: title },
          ]}
        />
      </div>
      {isAd ? (
        <div className={styles.body}>
          <div className={styles.contentAd}>
            <div id="info">
              <h1 className={styles.title}>{title}</h1>
              <TextContent content={text} />
            </div>
          </div>
          <div className={styles.stickyBar}>
            <div className={styles.stickyBlock}>
              <SellerInfo seller={seller} />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.body}>
          <div className={styles.content}>
            {imagesSrcs.length ? (
              <CardSlider alt={title} images={imagesSrcs} />
            ) : (
              <NoImage />
            )}

            <div className={styles.infoProduct}>
              <h1 className={styles.title}>{title}</h1>
              <SellerInfo seller={seller} />
              <div className={styles.prices}>
                <div className={styles.pricesBlock}>
                  {!!price && (
                    <span className={styles.price}>{PrintPrice(price)} ₽</span>
                  )}
                  {!!oldPrice && (
                    <span className={styles.oldPrice}>
                      {PrintPrice(oldPrice)} ₽
                    </span>
                  )}
                </div>
              </div>

              {/* <div className={styles.blockBtn}></div> */}
            </div>

            <div className={styles.blockInfo}>
              <div id="characteristics">
                <h2 className={styles.subtitle}>Характеристики</h2>

                {filters.map((filter, i) => (
                  <PropertyRowElement
                    key={`pr-${i}`}
                    {...getPropertyProps(filter, product)}
                  />
                ))}
              </div>

              {!!text && (
                <div id="info">
                  <h2 className={styles.subtitle}>Описание</h2>
                  <TextContent content={text} />
                </div>
              )}
            </div>
          </div>
          <div className={styles.stickyBar}>
            <div className={styles.stickyBlock}>
              {/* <ToCart productId={id} /> */}
              <div className={styles.anchorButtons}>
                <Link className={styles.anchorButton} href="#">
                  Галлерея
                </Link>
                <Link className={styles.anchorButton} href="#characteristics">
                  Храктеристики
                </Link>
                <Link className={styles.anchorButton} href="#info">
                  Описание
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <PageModals />
    </>
  );
}
