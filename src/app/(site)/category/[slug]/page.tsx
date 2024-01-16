import { ApiClientInstance } from "@/lib/api/api-client";
import styles from "./page.module.css";
import ProductCard from "@/components/widgets/product-card/product-card";
import { CommonFileItem, ImageFileItem } from "@/types/filte.type";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

type Сategory = {
  title: string;
  slug: string;
  text: string;
};

type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  oldPrice: number;
  files: {
    images: ImageFileItem[];
  };
};

type CategoryData = {
  category: Сategory;
  products: Product[];
};

export default async function Page({ params: { slug } }: Props) {
  try {
    const data: CategoryData = await ApiClientInstance.getCategory(slug);
    const { products, category } = data;

    const productCards = products.map(
      ({ title, price, id, oldPrice, files, slug: productSlug }) => (
        <ProductCard
          key={`p-${id}`}
          title={title}
          price={price}
          oldPrice={oldPrice}
          slug={productSlug}
          image={files.images?.[0]}
        />
      )
    );

    return (
      <>
        <h1>{category.title}</h1>
        <div className={styles.catalogList}>{productCards}</div>
        <div>
          <p>{category.text}</p>
        </div>

        <pre>{JSON.stringify(data, null, "\t")}</pre>
      </>
    );
  } catch (e) {
    // console.log(e);
    return notFound();
  }
}
