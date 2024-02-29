import Image from "next/image";
import FilterSelection from "./homeFastSelection/filter-selection";
import styles from "./quick-product-selection.module.css";
import { CarBrand } from "@/types/car";
import Link from "next/link";

type Props = {
  items: CarBrand[];
};

export function QuickProductSelection({ items }: Props) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {items.map((item) => {
          return (
            <li className={styles.item} key={item.id}>
              <Link className={styles.link} href={item.url}>
                {/* <span>{item.title}</span> */}
                <Image
                  unoptimized
                  className={styles.image}
                  key={item.id}
                  width={96}
                  height={48}
                  src={item.img}
                  alt="1"
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        <FilterSelection />
      </div>
    </div>
  );
}
