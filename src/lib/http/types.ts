export type QueryMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type ResponseErrorData = {
  data: {
    status: number;
    error: string;
    errorCode?: string;
    message: string | string[];
  };
};

export enum QueryErrorStatus {
  none,
  refresh,
}
