import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Text } from "@/components/ui/text";
import CardSlider from "@/components/widgets/card-slider/card-slider";
import ToFastOrder from "@/components/widgets/to-fast-order/to-fast-order";
import { ApiClientInstance } from "@/lib/api/api-client";
import { PrintPrice } from "@/lib/utils/price";
import { GetFileUrl } from "@/lib/utils/url";
import Link from "next/link";
import PageModals from "../../../../components/widgets/page-modals/page-modals";
import { PropertyRowElement } from "./components/property-row/property-row";
import styles from "./page.module.css";
import { getPropertyProps } from "./services";
import { ProductData } from "./types";

// обновлять кеш каждые 15 секунд
export const revalidate = 15;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const { product } = await ApiClientInstance.getProduct<ProductData>(slug);
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
  const data = await ApiClientInstance.getProduct<ProductData>(slug);
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
      <div className={styles.colContent}>
        <CardSlider alt={title} images={imagesSrcs} />
        <div className={styles.infoProduct}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.prices}>
            <div className={styles.pricesBlock}>
              <span className={styles.price}>{PrintPrice(price)} ₽</span>
              {!!oldPrice && (
                <span className={styles.oldPrice}>
                  {PrintPrice(oldPrice)} ₽
                </span>
              )}
            </div>
          </div>
          <div className={styles.blockBtn}></div>
        </div>
        <div className={styles.stickyBar}>
          <div className={styles.stickyBlock}>
            <ToFastOrder productId={id}/>
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
        <div className={styles.blockInfo}>
          <h2 id="characteristics">Характеристики</h2>
          <table className={styles.filterTable}>
            <thead>
              <tr>
                <th className={styles.filterThLeft}>Название</th>
                <th className={styles.filterThLeft}>Значение</th>
              </tr>
            </thead>
            <tbody>
              {filters.map((filter, i) => (
                <PropertyRowElement
                  key={`pr-${i}`}
                  {...getPropertyProps(filter, product)}
                />
              ))}
            </tbody>
          </table>
          <div>
            <h2 id="info">Описание</h2>
            <Text>{text}</Text>
          </div>
        </div>
      </div>
      <PageModals />
    </>
  );
}
