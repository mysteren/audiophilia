"use client";
import Button from "@/components/ui/button/button";
import Link from "next/link";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
} from "next/navigation";
import styles from "./pagination.module.css";

type Props = {
  itemsCount: number;
  limit: number;
};

const toPageLink = (page: number, searchParams: ReadonlyURLSearchParams) => {
  const params = new URLSearchParams();
  searchParams.forEach((val, key) => {
    console.log({ val, key });
    params.append(key, val);
  });

  if (page) {
    params.set("page", String(page));
  } else {
    params.delete("page");
  }
  console.log({ params, searchParams, page });
  console.log(params.toString());
  return params.toString();
};

function PagElement({
  page,
  href,
  active,
}: {
  page: number;
  href: string;
  active: boolean;
}) {
  if (active) {
    return <Button>{page + 1}</Button>;
  }
  return (
    <Link href={href}>
      <Button variant="primary">{page + 1}</Button>
    </Link>
  );
}

export function Pagination({ itemsCount, limit }: Props) {
  const searchParams = useSearchParams();
  const path = usePathname();
  // const router = useRouter();
  const page = Number(searchParams.get("page"));

  const items = () => {
    if (page > 3) {
      return (
        <>
          <PagElement
            key={`pag-0`}
            active={!page}
            href={`${path}?${toPageLink(0, searchParams)}`}
            page={0}
          />
          <span>...</span>
          {Array.from({ length: 5 }, (_, i) => {
            const n = i - 2 + page;
            return (
              <PagElement
                key={`pag-${n}`}
                active={n === page}
                href={`${path}?${toPageLink(n, searchParams)}`}
                page={n}
              />
            );
          })}
        </>
      );
    }
    return (
      <>
        {Array.from({ length: 6 }, (_, n) => (
          <PagElement
            key={`pag-${n}`}
            active={n === page}
            href={`${path}?${toPageLink(n, searchParams)}`}
            page={n}
          />
        ))}
      </>
    );
  };

  if (!page && limit > itemsCount) {
    return;
  }

  return <div className={styles.container}>{items()}</div>;
}
