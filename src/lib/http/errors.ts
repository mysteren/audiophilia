import { ResponseErrorData } from "./types";

export class ApiResponseError extends Error {
  public responseErrorData: ResponseErrorData;

  constructor(payload: ResponseErrorData) {
    super("Api Response Error");
    this.responseErrorData = payload;
  }

  getErrorString() {
    const { message } = this.responseErrorData;
    if (message instanceof Array) {
      return message.join(", ");
    }
    return message;
  }
}