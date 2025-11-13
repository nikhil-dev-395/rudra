import { TResponse } from "dto/response";
import { Response as ExpressResponse } from "express";

export class Response {
  public statusCode: number;
  public data?: any;
  public message: string;

  constructor(
    res: ExpressResponse,
    statusCode: number,
    message: string,
    data?: any
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;

    const responseBody: TResponse = {
      success: statusCode < 400,
      message: this.message,
      data: this.data || null,
    };

    res.status(statusCode).json(responseBody);
  }
}
