import Button from "@/shared/ui/button/button";
import Link from "next/link";

export function PagElement({
    page,
    href,
    active,
  }: {
    page: number;
    href: string;
    active: boolean;
  }) {
    if (active) {
      return <Button variant="primary">{page}</Button>;
    }
    return (
      <Link href={href} scroll={false}>
        <Button >{page}</Button>
      </Link>
    );
  }