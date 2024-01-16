import { API_INTERNAL } from "@/config";
import { CommonFileItem } from "@/types/filte.type";

const basePath = "/uploads/public/src";

export const GetFileUrl = (file: CommonFileItem) => {
  const { hash, ext } = file;
  const folder = `${hash.slice(0, 2)}/${hash.slice(2, 4)}/${hash.slice(4, 6)}`;
  return `${API_INTERNAL}${basePath}/${folder}/${hash}.${ext}`;
};
