// Next module
import Link from "next/link";
import { notFound } from "next/navigation";

// Ui
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Text } from "@/components/ui/text";

// Widgets
import Card from "@/components/widgets/card/card";
import ProductCard from "@/components/widgets/product-card/product-card";

// Api
import { ApiClientInstance } from "@/lib/api/api-client";

// Types
import { TypesProduct } from "@/types/product";

// Styles
import styles from "./page.module.css";
import Filters from "@/components/widgets/filters/filters";
import { Filter } from "@/types/categoryFilter";

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

// type Product = {
//   id: number;
//   title: string;
//   slug: string;
//   price: number;
//   oldPrice: number;
//   files: {
//     images: ImageFileItem[];
//   };
// };

type CategoryElement = {
  title: string;
  slug: string;
};

type CategoryData = {
  category: Сategory;
  products: TypesProduct[];
  parents: CategoryElement[];
  childrens: CategoryElement[];
  filters: Filter[];
};

export default async function Page({ params: { slug } }: Props) {
  try {
    const data: CategoryData = await ApiClientInstance.getCategory(slug);
    const { products, category, parents, childrens, filters } = data;

    const productCards = products.map((product: TypesProduct) => (
      <Card key={`pc-${product.id}`} product={product} />
    ));

    const subcategories = childrens.map(({ title, slug }) => {
      const to = `/category/${slug}`;
      return (
        <li key={to}>
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
              <Filters items={filters} />
            </div>
          </aside>
          <section className={`${styles.products}`}>{productCards}</section>
        </div>
        <div>
          <Text>{category.text}</Text>
        </div>
      </>
    );
  } catch (e) {
    return notFound();
  }
}
