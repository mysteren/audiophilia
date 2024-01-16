import ButtonPrimary from "@/components/ui/button-primary";
import { ApiClientInstance } from "@/lib/api/api-client";
import { PrintPrice } from "@/lib/utils/price";
import { GetFileUrl } from "@/lib/utils/url";
import { ImageFileItem } from "@/types/filte.type";
import Image from "next/image";
import styles from "./page.module.css";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Text } from "@/components/ui/text";

type Props = {
  params: {
    slug: string;
  };
};

type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  oldPrice: number;
  text: string;
  files: {
    images: ImageFileItem[];
  };
  // category: {
  //   title: string;
  //   slug: string;
  // };
};

type Category = {
  title: string;
  slug: string;
};

type ProductData = {
  product: Product;
  categories: Category[];
};

export default async function Page({ params }: Props) {
  const data = await ApiClientInstance.getProduct<ProductData>(params.slug);
  const { categories, product } = data;
  const { title, price, text, files, oldPrice } = product;
  // const category = categories[0];
  //   const { products, category } = data;

  //   const productCards = products.map(({ title, price, id }: Props) => (
  //     <ProductCard key={`p-${id}`} title={title} price={price} />
  //   ));

  const images = files.images.map((image) => (
    <Image
      key={`im-${image.hash}`}
      className={styles.image}
      src={GetFileUrl(image)}
      alt={title}
      // loader={imageLoader}
      width={800}
      height={800}
    />
  ));

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
      <div className={styles.cols2}>
        <div className={styles.images}>{images}</div>
        <div>
          <h1>{title}</h1>
          <div className={styles.prices}>
            <span className={styles.price}>{PrintPrice(price)} ₽</span>
            {!!oldPrice && (
              <span className={styles.oldPrice}>{PrintPrice(oldPrice)} ₽</span>
            )}
            <ButtonPrimary>Купить</ButtonPrimary>
          </div>
        </div>
      </div>
      <div>
        <Text>{text}</Text>
      </div>
      {/* <pre>{JSON.stringify(data, null, "\t")}</pre> */}
    </>
  );
}
