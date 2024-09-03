import { ResponseErrorData } from "./types";

export class ApiResponseError<T = unknown> extends Error {
  public responseErrorData: ResponseErrorData<T>;

  constructor(payload: ResponseErrorData<T>) {
    super(JSON.stringify({ data: payload }));
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
