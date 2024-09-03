import { getProduct, getPropertyProps } from "@/entities/product";
import { Breadcrumbs } from "@/features/breadcrumbs";
import PropertyRowElement from "@/features/property-row";
import ToCart from "@/features/to-cart/to-cart";
import { ApiResponseError } from "@/shared/api/http/errors";
import { PrintPrice } from "@/shared/lib/utils/price";
import { GetFileUrl, getHostname } from "@/shared/lib/utils/url";
import NoImage from "@/shared/ui/noimage/noimage";
import { Text } from "@/shared/ui/text";
import CardSlider from "@/widgets/card-slider/card-slider";
import PageModals from "@/widgets/page-modals/page-modals";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { isAdByCategories } from "@/entities/category";
import { ruPhoneTransformer } from "@/shared/lib/utils/phone";
import SellerInfo from "@/features/seller-info";

// обновлять кеш каждые 15 секунд
export const revalidate = 15;

type Props = {
  params: {
    slug: string;
  };
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

export async function generateMetadata({ params: { slug } }: Props) {
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

export default async function Page({ params: { slug } }: Props) {
  const data = await fetchData(slug);
  const { categories, product, filters, seller } = data;
  const { id, title, price, text, files, oldPrice } = product;

  const isAd = isAdByCategories(categories);

  const imagesSrcs = files.images.map((item) => {
    return GetFileUrl(item);
  });

  return (
    <>
      <div className={styles.top}>
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
              <Text>{text}</Text>
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
                  <Text>{text}</Text>
                </div>
              )}
            </div>
          </div>
          <div className={styles.stickyBar}>
            <div className={styles.stickyBlock}>
              <ToCart productId={id} />
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
