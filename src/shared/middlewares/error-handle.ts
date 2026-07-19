import { type NextFunction, type Request, type Response } from "express";
import { AppError } from "../errors/error-handler.js";
import { HttpStatusCodes } from "../constants/http-status-code.js";

export function errorHandler(
    error: Error,
    _: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    __: NextFunction
): Response {
    if( error instanceof AppError) {
        return res.status(error.statusCode).json({
            code: error.code,
            message: error.message,
            details: error.details,
        });
    }
    
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
        code: "INTERNAL_SERVER_ERROR",
        message: "Internal server error"
    })
}