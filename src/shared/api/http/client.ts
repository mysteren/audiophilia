import { BaseHttpClient } from "./base";
import { ApiResponseError } from "./errors";
import { ResponseErrorData, QueryErrorStatus, QueryMethod } from "./types";


export abstract class HttpClientWithAuth extends BaseHttpClient {
  protected abstract refreshTokenUri: string;

  protected abstract getAccessToken: () => string

  protected abstract useRefreshToken: () => void;

  protected getAuthHeaders = () => {
    return {
      Authorization: `Bearer ${this.getAccessToken()}`,
    };
  }

  protected async checkErrors(data: ResponseErrorData) {
    if (data.errorCode === "jsonWebTokenExpired") {
      await this.useRefreshToken();

      return QueryErrorStatus.refresh;
    }
    return QueryErrorStatus.none;
  }

  protected async query<T, K>(
    url: string,
    method: QueryMethod,
    body?: T
  ): Promise<K> {
    try {
      return await super.query<T, K>(url, method, body);
    } catch (e) {
      if (e instanceof ApiResponseError) {
        const errorStatus = await this.checkErrors(e.responseErrorData);
        if (errorStatus === QueryErrorStatus.refresh) {
          return await this.query<T, K>(url, method, body);
        }
      }
      throw e;
    }
  }

  protected async queryMultipart<K>(
    url: string,
    method: QueryMethod,
    body: FormData
  ): Promise<K> {
    try {
      return await super.queryMultipart<K>(url, method, body);
    } catch (e) {
      if (e instanceof ApiResponseError) {
        const errorStatus = await this.checkErrors(e.responseErrorData);
        if (errorStatus === QueryErrorStatus.refresh) {
          return await this.queryMultipart<K>(url, method, body);
        }
      }
      throw e;
    }
  }
}