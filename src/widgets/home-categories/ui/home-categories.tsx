import { TypesCollections } from "@/shared/types/collections";
import ItemCategories from "./item-categories";
import styles from "./home-categories.module.css";
type Props = {
  items: TypesCollections[];
};
export default function HomeCategories({ items }: Props) {
  return (
    <>
      <div className={styles.grid}>
        {items.map((item) => {
          return <ItemCategories key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}
