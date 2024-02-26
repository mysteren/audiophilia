import Button from "@/components/ui/button/button";
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
      return <Button>{page}</Button>;
    }
    return (
      <Link href={href}>
        <Button variant="primary">{page}</Button>
      </Link>
    );
  }