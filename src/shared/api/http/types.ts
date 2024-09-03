export type QueryMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type ResponseErrorData<T = unknown> = {
  status: number;
  error: string;
  errorCode?: string;
  message: string | string[];
  data: T;
};

export enum QueryErrorStatus {
  none,
  refresh,
}

export type RefreshRequest = {
  refresh_token: string;
};

export type RefreshResponse = {
  access_token: string;
  refresh_token: string;
};