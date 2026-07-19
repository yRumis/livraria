import { HttpStatusCodes, type HttpStatusCode } from "../constants/http-status-code.js";
import type { ErrorCode } from "./error-codes.js";

interface AppErrorOptions {
  message: string;
  statusCode?: HttpStatusCode;
  code?: ErrorCode;
  details?: unknown;
}

export class AppError extends Error {

  public readonly statusCode: number;
  public readonly code?: ErrorCode | undefined;
  public readonly details?: unknown;

    constructor({
        message,
        code,
        details,
        statusCode = HttpStatusCodes.BAD_REQUEST
    }:AppErrorOptions) {  
        super(message);

        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.code = code;
        this.details = details

        Object.setPrototypeOf(this, AppError.prototype);
    }
}
