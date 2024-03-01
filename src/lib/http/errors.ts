import { ResponseErrorData } from "./types";

export class ApiResponseError extends Error {
  public responseErrorData: ResponseErrorData;

  constructor(payload: ResponseErrorData) {
    super(JSON.stringify({ data: payload }));
    this.responseErrorData = payload;
  }

  getErrorString() {
    const { message } = this.responseErrorData.data;
    if (message instanceof Array) {
      return message.join(", ");
    }
    return message;
  }
}
