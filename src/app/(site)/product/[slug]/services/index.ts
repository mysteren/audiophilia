import { CategoryFilter, Product } from "../types";

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


/**
 * 
 * CREATE INDEX "IDX_27ab95b168e05b3a9f73a65d3b" ON public.product USING gin (properties);
 * 
 */