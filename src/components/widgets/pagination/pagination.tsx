"use client";
import {
  usePathname,
  useSearchParams
} from "next/navigation";
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
  const page = Number(searchParams.get("page"));

  const items = () => {
    if (page > 2) {
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
        {Array.from({ length: 5 }, (_, n) => (
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
