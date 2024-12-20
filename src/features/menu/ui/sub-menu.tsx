import Link from "next/link";
import { MenuTreeItem } from "../types";
import styles from "./sub-menu.module.css";

type Props = {
  items: MenuTreeItem[];
};

function Item({ item: { title, slug, urlPrefix } }: { item: MenuTreeItem }) {
  if (slug) {
    const href = urlPrefix ? `/${urlPrefix}/${slug}` : `/${slug}`;
    return (
      <Link className={styles.link} href={href}>
        {title}
      </Link>
    );
  }
  return <span className={styles.link}>{title}</span>;
}

export default function SubMenu({ items }: Props) {
  return (
    <>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index}>
            {/* <Link className={styles.link} href={`/category/${child.slug}`}>{child.title}</Link> */}
            <Item item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
