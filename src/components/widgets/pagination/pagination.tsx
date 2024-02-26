"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { PagElement } from "./components/pag-element";
import styles from "./pagination.module.css";
import { toPageLink } from "./services";

type Props = {
  itemsCount: number;
  limit: number;
};

export function Pagination({ itemsCount, limit }: Props) {
  const searchParams = useSearchParams();
  const path = usePathname();
  const page = Number(searchParams.get("page") || 1);

  const items = () => {
    if (page > 4) {
      return (
        <>
          <PagElement
            key={`pag-1`}
            active={!page}
            href={`${path}?${toPageLink(0, searchParams)}`}
            page={1}
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
        {Array.from({ length: 6 }, (_, i) => {
          const n = i + 1;
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
  };

  if (!page && limit > itemsCount) {
    return;
  }

  return <div className={styles.container}>{items()}</div>;
}
