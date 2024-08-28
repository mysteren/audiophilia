import { API_INTERNAL } from "@/shared/config";
import { HttpClient } from "../http/http-client";
import { RefreshRequest, RefreshResponse } from "./types";
import { toSearchString } from "../utils/url";

class ApiClient extends HttpClient {
  protected baseUrl = `${API_INTERNAL}/site-market-api`;

  public onRefreshToken?: (access_token: string, refresh_token: string) => void;

  protected async refreshTokenQuery(refresh_token: string) {
    const result = (await this.refresh(refresh_token)) ?? {
      access_token: "",
      refresh_token: "",
    };
    if (this.onRefreshToken) {
      this.onRefreshToken(result.access_token, result.refresh_token);
    }
    return result;
  }

  refresh(token: string) {
    return this.post<RefreshRequest, RefreshResponse>("/auth/refresh-token", {
      refresh_token: token,
    });
  }

  getCategoryTree<T>() {
    return this.get<T>("/category/tree");
  }

  getCategory<T>(
    slug: string,
    searchParams: Record<string, string>,
    page: string,
    limit: string
  ) {
    const searchQuery = new URLSearchParams({
      page,
      limit,
      ...searchParams,
    });
    return this.get<T>(`/category/${slug}?${searchQuery}`);
  }

  getProductsByIds<T>(ids: string) {
    return this.get<T>(`/productsByIds/${ids}`);
  }

  getProduct<T>(slug: string) {
    return this.get<T>(`/product/${slug}`);
  }

  getSettings<T>(keys: string[]) {
    const url = `/settings/public?${toSearchString({ keys: keys.join(",") })}`;
    return this.get<T>(url);
  }

  // login(email: string, password: string) {
  //   return this.post<LoginRequest, LoginResponse>("/auth/login", {
  //     email,
  //     password,
  //   });
  // }

  order<T, K>(payload: K) {
    const url = "/order";
    return this.post<K, T>(url, payload);
  }

  sitemapCategories<T>() {
    const url = `/sitemap/categories`;
    return this.get<T>(url);
  }

  sitemapProducts<T>(limit: number, page: number) {
    const url = `/sitemap/products?${toSearchString({ limit, page })}`;
    return this.get<T>(url);
  }

  sitemapProductsCount<T>() {
    const url = "/sitemap/products-count";
    return this.get<T>(url);
  }
}

export const ApiClientInstance = new ApiClient();
