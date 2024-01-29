import { API_INTERNAL } from "@/config";
import { HttpClient } from "../http/http-client";
import { RefreshRequest, RefreshResponse } from "./types";

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

  getCategoryTree() {
    return this.get<any>("/category/tree");
  }

  getCategory<T>(slug: string) {
    return this.get<T>(`/category/${slug}`);
  }

  getProduct<T>(slug: string) {
    return this.get<T>(`/product/${slug}`)
  }

  // login(email: string, password: string) {
  //   return this.post<LoginRequest, LoginResponse>("/auth/login", {
  //     email,
  //     password,
  //   });
  // }
}

export const ApiClientInstance = new ApiClient();
