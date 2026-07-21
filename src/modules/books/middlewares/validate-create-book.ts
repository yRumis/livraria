import type { NextFunction, Request, Response } from "express";
import { createBookSchema } from "../validations/create-book.schema.js";
import { AppError } from "../../../shared/errors/error-handler.js";
import { ErrorCodes } from "../../../shared/errors/error-codes.js";
import { HttpStatusCodes } from "../../../shared/constants/http-status-code.js";


export function validateCreateBook(
    req: Request,
    _: Response,
    next: NextFunction
){
    console.log(" middleware executou")
    const { error, value } = createBookSchema.validate(req.body);

    if (error) {
        throw new AppError({
            message: "Dados invalidos",
            code: ErrorCodes.VALIDATION_ERROR,
            details: error.details,
            statusCode: HttpStatusCodes.BAD_REQUEST
        })
    }

    req.body = value;

    next();
}