import { API_INTERNAL } from "@/shared/config";
import { BaseHttpClient } from "../http";


export class ApiClient extends BaseHttpClient {
  protected baseUrl = `${API_INTERNAL}/site-market-api`;
  protected refreshTokenUri = "/auth/refresh-token";
  
  protected getAuthHeaders = () => {
    return {};
  };

  public getAccessToken = () => "";

  public useRefreshToken = () => {};
}

export const ApiClientInstance = new ApiClient();