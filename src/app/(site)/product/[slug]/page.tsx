import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import NoImage from "@/components/ui/noimage/noimage";
import { Text } from "@/components/ui/text";
import CardSlider from "@/components/widgets/card-slider/card-slider";
import ToCart from "@/components/widgets/to-cart/to-cart";
import { PrintPrice } from "@/lib/utils/price";
import { GetFileUrl } from "@/lib/utils/url";
import { getProduct } from "@/services/product";
import Link from "next/link";
import PageModals from "../../../../components/widgets/page-modals/page-modals";
import { PropertyRowElement } from "./components/property-row/property-row";
import styles from "./page.module.css";
import { getPropertyProps } from "./services";

// обновлять кеш каждые 15 секунд
export const revalidate = 15;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const { product } = await getProduct(slug);
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
  const data = await getProduct(slug);
  const { categories, product, filters } = data;
  const { id, title, price, text, files, oldPrice } = product;

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
      <div className={styles.body}>
        <div className={styles.content}>
          {imagesSrcs.length ? (
            <CardSlider alt={title} images={imagesSrcs} />
          ) : (
            <NoImage />
          )}

          <div className={styles.infoProduct}>
            <h1 className={styles.title}>{title}</h1>
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
            <div className={styles.blockBtn}></div>
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
      <PageModals />
    </>
  );
}
