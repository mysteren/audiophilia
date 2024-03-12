import { ApiClientInstance } from "@/lib/api/api-client";

type FastOrderDto = {
  name: string;
  email: string;
  phone: string;
}

export function fastOrder(data: FastOrderDto) {
  return ApiClientInstance.fastOrder(data);
}