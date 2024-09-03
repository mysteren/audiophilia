import { ApiClientInstance } from "@/shared/api";
import { CategoryFilter, Product, ProductData } from "@/shared/types/product";

export function getProductsByIds(ids: Array<number | string>) {
  const url = `/productsByIds/${ids.join(",")}`;
  return ApiClientInstance.get<Product[]>(url);
}

export function getProduct(slug: string) {
  const url = `/product/${slug}`;
  return ApiClientInstance.get<ProductData>(url);
}

export async function getProductsById(id: number | string) {
  const [item] = await getProductsByIds([id]);
  return item;
}

export function getPropertyProps(filter: CategoryFilter, product: Product) {
  let value: string = "";
  const { key, name, addition } = filter;
  const productProperty = product.properties[key];
  if (filter.type === "value") {
    value = String(productProperty);
  } else if (filter.type === "select") {
    value = filter.options
      .reduce((val, option) => {
        const property = productProperty as string[];
        if (property.includes(option.value)) {
          val.push(option.name);
        }
        return val;
      }, [] as string[])
      .join(", ");
  }
  return { name, value, unit: addition?.unit };
}
