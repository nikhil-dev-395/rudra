import { Response } from "express";

export class ApiError extends Error {
  public statusCode: number;
  public data?: any;
  constructor(res: Response, statusCode: number, message: string, data?: any) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
    Object.setPrototypeOf(this, ApiError.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    res.status(this.statusCode).json({
      success: false,
      message: this.message,
      data: this.data || null,
    });
  }
}

/**
 * sub error classes so we just need to pass those error name class
 * */

export class badRequestError extends ApiError {
  constructor(res: Response, message = "bad request error", data?: any) {
    super(res, 400, message, data);
  }
}

export class conflictError extends ApiError {
  constructor(res: Response, message = "conflict request error", data?: any) {
    super(res, 409, message, data);
  }
}

export class notFoundError extends ApiError {
  constructor(res: Response, message = "conflict request error", data?: any) {
    super(res, 409, message, data);
  }
}

export class internalServerError extends ApiError {
  constructor(res: Response, message = "Internal Server Error", data?: any) {
    super(res, 500, message, data);
  }
}
