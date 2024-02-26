import { ReadonlyURLSearchParams } from "next/navigation";

export function toPageLink(
  page: number,
  searchParams: ReadonlyURLSearchParams
) {
  const params = new URLSearchParams();
  searchParams.forEach((val, key) => {
    params.append(key, val);
  });

  if (page > 1) {
    params.set("page", String(page));
  } else {
    params.delete("page");
  }
  return params.toString();
}
