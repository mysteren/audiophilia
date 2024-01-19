import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Text } from "@/components/ui/text";
import ProductCard from "@/components/widgets/product-card/product-card";
import Card from "@/components/widgets/card/card";
import { ApiClientInstance } from "@/lib/api/api-client";
import { ImageFileItem } from "@/types/filte.type";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { TypesProduct } from "@/types/carInStock";

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
};

export default async function Page({ params: { slug } }: Props) {
  try {
    const data: CategoryData = await ApiClientInstance.getCategory(slug);
    const { products, category, parents, childrens } = data;

    const productCards = products.map((car: TypesProduct) => (
        <Card
          key={`p-${car.id}`}
          car={car}
        />
      )
    );

    const subcategories = childrens.map(({ title, slug }) => {
      const to = `/category/${slug}`;
      return (
        <li key={to}>
          <Link  href={to}>
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
        <h1>{category.title}</h1>
        <div>
          <ul>{subcategories}</ul>
        </div>
        <div className={styles.containerProduct}>{productCards}</div>
        <div>
          <Text>{category.text}</Text>
          {/* <p>{category.text}</p> */}
        </div>

        {/* <pre>{JSON.stringify(data, null, "\t")}</pre> */}
      </>
    );
  } catch (e) {
    // console.log(e);
    return notFound();
  }
}
