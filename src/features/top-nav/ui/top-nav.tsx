import Link from "next/link";

import styles from "./top-nav.module.css";
import clsx from "clsx";
import Button from "@/shared/ui/button/button";
import { getHeadMenu2 } from "@/entities/site-settings";

export const revalidate = 60;

export default async function TopNav() {
  const links = await getHeadMenu2();

  return (
    <nav
      className={clsx(styles.list)}
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      {links.map(({ href, name }) => {
        return (
          <Link itemProp="url" href={href}>
            <Button>{name}</Button>
          </Link>
        );
      })}
      {/* <Link itemProp="url" href="/category/dveri">
        <Button>Двери</Button>
      </Link>
      <Link itemProp="url" href="/category/podokonniki">
        <Button>Подоконники</Button>
      </Link>
      <Link href="/category/semena">
        <Button>Семена</Button>
      </Link> */}

      {/* <Link href="/blog">
        <Button>Статьи</Button>
      </Link> */}
      {/* <Link itemProp="url" href="/page/portfolio">
        <Button>Портфолио</Button>
      </Link> */}
      {/* <Link itemProp="url" href="/page/oplata-i-dostavka">
        <Button>Оплата и доставка</Button>
      </Link> */}
      {/* <Link itemProp="url" href="/page/contacts">
        <Button>Контакты</Button>
      </Link> */}
    </nav>
  );
}
