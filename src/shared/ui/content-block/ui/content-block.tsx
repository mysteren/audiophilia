import { ReactNode } from "react";
import styles from "./content-block.module.css";
import "@/shared/styles/site/text.css";
import clsx from "clsx";

type Props = {
  children?: ReactNode;
};

export default function ContentBlock({ children }: Props) {
  return <div className={clsx(styles.root)}>{children}</div>;
}
