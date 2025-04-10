"use client";
import Link from "next/link";
import { useHorizontalScroll } from "../model/hooks";
import styles from "./top-nav.module.css";
import clsx from "clsx";
import Button from "@/shared/ui/button/button";

type Props = {
  className?: string;
};

export default function TopNav({ className }: Props) {
  const elRef = useHorizontalScroll();

  return (
    <nav
      ref={elRef}
      className={clsx(styles.list, className)}
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <Link itemProp="url" href="/category/dveri">
        <Button>Двери</Button>
      </Link>
      <Link itemProp="url" href="/category/podokonniki">
        <Button>Подоконники</Button>
      </Link>
      <Link href="/category/semena">
        <Button>Семена</Button>
      </Link>

      {/* <Link href="/blog">
        <Button>Статьи</Button>
      </Link> */}
      {/* <Link itemProp="url" href="/page/portfolio">
        <Button>Портфолио</Button>
      </Link> */}
      {/* <Link itemProp="url" href="/page/oplata-i-dostavka">
        <Button>Оплата и доставка</Button>
      </Link> */}
      <Link itemProp="url" href="/page/contacts">
        <Button>Контакты</Button>
      </Link>
    </nav>
  );
}
