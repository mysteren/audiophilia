import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import ButtonPrimary from "@/components/ui/button-primary";
import { Text } from "@/components/ui/text";
import CardSlider from "@/components/widgets/card-slider/card-slider";
import { ApiClientInstance } from "@/lib/api/api-client";
import { PrintPrice } from "@/lib/utils/price";
import { GetFileUrl } from "@/lib/utils/url";
import { ImageFileItem } from "@/types/file.type";
import Link from "next/link";
import styles from "./page.module.css";

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
  properties: Record<string, string | string[] | number | number[]>;
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
  filters: CategoryFilter[];
};

type CategoryFilterOption = {
  value: string;
  name: string;
};

type CategoryFilter = {
  key: string;
  name: string;
  type: string;
  options: CategoryFilterOption[];
  properties: {
    unit?: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await ApiClientInstance.getProduct<ProductData>(params.slug);
  const { categories, product, filters } = data;
  const { title, price, text, files, oldPrice } = product;
  // const category = categories[0];
  //   const { products, category } = data;

  //   const productCards = products.map(({ title, price, id }: Props) => (
  //     <ProductCard key={`p-${id}`} title={title} price={price} />
  //   ));

  // const images = files.images.map((image) => (
  //   <Image
  //     key={`im-${image.hash}`}
  //     className={styles.image}
  //     src={GetFileUrl(image)}
  //     alt={title}
  //     // loader={imageLoader}
  //     width={800}
  //     height={800}
  //   />
  // ));

  const imagesSrcs = files.images.map((item) => {
    return GetFileUrl(item);
  });

  const propertiesTableBody = filters.map((filter) => {
    let value: string = "";
    const { key } = filter;
    const productProperty = product.properties[key];
    if (filter.type === "value") {
      value = String(productProperty);
    } else if (filter.type === "select") {
      value = filter.options
        .reduce((val, option) => {
          const property = productProperty as string[];
          if (property.includes(option.value)) {
            val.push(option.name);
          }
          return val;
        }, [] as string[])
        .join(", ");
    }
    return (
      <tr key={`property-${filter.key}`}>
        <td className={styles.filterTd}>{filter.name}</td>
        <td>
          {value} {filter.properties?.unit}
        </td>
      </tr>
    );
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
          {/* <div className={styles.viewsBlock}>
            <Image className={styles.viewsImage} src={Eye} alt="Просмотры" width={32} height={20}/>
            <span className={styles.viewsText}>Автомобиль сейчас смотрит {count} человек</span>
          </div> */}
          {/* <div className={styles.mainPartsBlock}>
          <div className={styles.partsBlock}>
            <Image className={styles.partsIcon} src={Gear} width={18} height={18} alt=""/>
            <span className={styles.partsText}>1.2 л</span>
          </div>
          <div className={styles.partsBlock}>
            <Image className={styles.partsIcon} src={Engine} width={18} height={18} alt=""/>
            <span className={styles.partsText}>115 л.c.</span>
          </div>
          <div className={styles.partsBlock}>
            <Image className={styles.partsIcon} src={Transmission} width={18} height={18} alt=""/>
            <span className={styles.partsText}>Механика</span>
          </div>
          <div className={styles.partsBlock}>
            <Image className={styles.partsIcon} src={CarRepair} width={18} height={18} alt=""/>
            <span className={styles.partsText}>Передний</span>
          </div>
          </div> */}
          <div className={styles.prices}>
            <div className={styles.pricesBlock}>
              <span className={styles.price}>{PrintPrice(price)} ₽</span>
              {!!oldPrice && (
                <span className={styles.oldPrice}>
                  {PrintPrice(oldPrice)} ₽
                </span>
              )}
            </div>
            {/* <span className={styles.priceCredit}>В кредит<br></br> от 12 000 ₽/мес</span> */}
          </div>
          <div className={styles.blockBtn}>
            <ButtonPrimary>Купить</ButtonPrimary>
          </div>
        </div>
        <div className={styles.stickyBar}>
          <div className={styles.stickyBlock}>
            <ButtonPrimary>Забронировать</ButtonPrimary>
            <div className={styles.anchorButtons}>
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
            <tbody>{propertiesTableBody}</tbody>
          </table>
          <div>
            <h2 id="info">Описание</h2>
            <Text>{text}</Text>
          </div>
        </div>
      </div>
    </>
  );
}
