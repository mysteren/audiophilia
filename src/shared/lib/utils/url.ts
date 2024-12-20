import { API_INTERNAL } from "@/shared/config";
import { CommonFileItem } from "@/shared/types/file";

const basePath = "/uploads/public/src";

export const GetFileUrl = (file: CommonFileItem) => {
  const { hash, ext } = file;
  const folder = `${hash.slice(0, 2)}/${hash.slice(2, 4)}/${hash.slice(4, 6)}`;
  return `${API_INTERNAL}${basePath}/${folder}/${hash}.${ext}`;
};

export function toSearchString(data: Record<string, string | number>) {
  const url = new URLSearchParams(data as Record<string, string>);
  return url.toString();
}

export function getBaseUrl(scheme: string, host: string, port: string) {
  if (port) {
    return `${scheme}://${host}:${port}`;
  }
  return `${scheme}://${host}`;
}


export function getHostname(url: string) {
  return new URL(url).hostname
}