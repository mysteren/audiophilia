import { getBaseUrl } from "@/lib/utils/url";

export const API_INTERNAL = process.env.NEXT_PUBLIC_API_INTERNAL;

export const SCHEME = process.env.SCHEME || "";

export const HOST = process.env.HOST || "";

export const PORT = process.env.PORT || "";

export const BASE_URL = getBaseUrl(SCHEME, HOST, PORT);

export const SITEMAP_LIMIT = 1500;
