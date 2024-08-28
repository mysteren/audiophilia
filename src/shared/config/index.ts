import { getBaseUrl } from "@/shared/lib/utils/url";

export const API_INTERNAL = process.env.NEXT_PUBLIC_API_INTERNAL;

export const SCHEME = process.env.SCHEME || "";

export const HOST = process.env.HOST || "";

export const PORT = process.env.PORT || "";

export const BASE_URL = getBaseUrl(SCHEME, HOST, PORT);

export const SITEMAP_LIMIT = 2000;

export const GTM_KEY = process.env.GTM_KEY || "";

export const YA_METRIKA_KEY = process.env.YA_METRIKA_KEY || "";
