export type QueryMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type ResponseErrorData = {
  statusCode: number;
  error: string;
  errorCode?: string;
  message: string | string[];
};

export enum QueryErrorStatus {
  none,
  refresh
}