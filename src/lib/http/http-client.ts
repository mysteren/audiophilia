import { RefreshResponse } from "../api/types";
import { ApiResponseError } from "./errors";
import { QueryErrorStatus, QueryMethod, ResponseErrorData } from "./types";

export abstract class HttpClient {
  protected abstract baseUrl: string;

  protected abstract refreshTokenQuery(
    refresh_token: string
  ): Promise<RefreshResponse>;

  protected accessToken = "";
  protected refreshToken = "";

  private getAuthHeaders(): HeadersInit {
    return {
      Authorization: `Bearer ${this.accessToken}`,
    };
  }

  private jsonHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  // private formDataHeaders: HeadersInit = {
  //   "Content-Type": `multipart/form-data; boundary=-----${Number(new Date())}`,
  // };

  private convertBody(body: unknown) {
    return JSON.stringify(body);
  }

  private async checkErrors(data: ResponseErrorData) {
    if (data.errorCode === "jsonWebTokenExpired") {
      const { refresh_token, access_token } = await this.refreshTokenQuery(
        this.refreshToken
      );

      this.refreshToken = refresh_token;
      this.accessToken = access_token;

      return QueryErrorStatus.refresh;
    }
    return QueryErrorStatus.none;
  }

  private async query<T, K>(
    url: string,
    method: QueryMethod,
    body?: T
  ): Promise<K> {
    const resp = await fetch(`${this.baseUrl}${url}`, {
      method,
      headers: { ...this.jsonHeaders, ...this.getAuthHeaders() },
      body: this.convertBody(body),
    });
    const result = await resp.json();
    if (resp.ok) {
      return result as K;
    }

    const errorStatus = await this.checkErrors(result);

    if (errorStatus === QueryErrorStatus.refresh) {
      return this.query<T, K>(url, method, body);
    }
    console.log({ result, url })
    throw new ApiResponseError(result);
  }

  private async queryMultipart<K>(
    url: string,
    method: QueryMethod,
    body: FormData
  ): Promise<K> {
    const resp = await fetch(`${this.baseUrl}${url}`, {
      method,
      headers: { ...this.getAuthHeaders() },
      body: body,
    });
    const result = await resp.json();
    if (resp.ok) {
      return result as K;
    }

    const errorStatus = await this.checkErrors(result);

    if (errorStatus === QueryErrorStatus.refresh) {
      return this.queryMultipart(url, method, body);
    }
    throw new ApiResponseError(result);
  }

  public setAuthToken(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  public get<T>(url: string) {
    return this.query<undefined, T>(url, "GET");
  }

  public post<T, K>(url: string, payload: T) {
    return this.query<T, K>(url, "POST", payload);
  }

  public patch<T, K>(url: string, payload: T) {
    return this.query<T, K>(url, "PATCH", payload);
  }

  public delete<T>(url: string) {
    return this.query<undefined, T>(url, "DELETE");
  }

  public upload<T>(url: string, data: FormData, method: QueryMethod = "POST") {
    return this.queryMultipart<T>(url, method, data);
  }
}
