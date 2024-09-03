import { ApiClientInstance } from "@/shared/api";
import { OrderDto } from "./types";

type OrderResponce = {
  status: true;
  orderId: string;
};

export function order(data: OrderDto) {
  const url = "/order";
  return ApiClientInstance.post<OrderDto, OrderResponce>(url, data);
}
