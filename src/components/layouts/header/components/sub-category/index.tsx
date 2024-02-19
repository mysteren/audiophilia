import styles from './index.module.css';
import { CategoryItem } from "@/types/categoryItem";

type Props = {
  selectedItem: CategoryItem | null;
};

export default function SubCategory(props: Props) {
  const { selectedItem } = props;
  return (
    <>
      {selectedItem && selectedItem.children && (
        <ul className={styles.list}>
          {selectedItem.children.map((child, index) => (
            <li key={index}>
              <p>{child.title}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
