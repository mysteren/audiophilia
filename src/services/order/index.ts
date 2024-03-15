import { ApiClientInstance } from "@/lib/api/api-client";
import { FastOrderDto } from "./types";

type FastOrderResponce = {
  status: true;
};

export function fastOrder(data: FastOrderDto) {
  return ApiClientInstance.fastOrder<FastOrderResponce, FastOrderDto>(data);
}
