import { ApiClientInstance } from "@/shared/lib/api/api-client";
import { OrderDto } from "./types";

type OrderResponce = {
  status: true;
  orderId: string;
};

// export function fastOrder(data: FastOrderDto) {
//   return ApiClientInstance.fastOrder<FastOrderResponce, FastOrderDto>(data);
// }


export function order(data: OrderDto) {
  return ApiClientInstance.order<OrderResponce, OrderDto>(data);
}