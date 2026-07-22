import type { NextFunction, Request, Response } from "express";
import { createUserSchema } from "../validations/create-user.schema.js";
import { AppError } from "../../../shared/errors/error-handler.js";
import { HttpStatusCodes } from "../../../shared/constants/http-status-code.js";
import { ErrorCodes } from "../../../shared/errors/error-codes.js";


export function validateCreateUser(
    req: Request,
    _: Response,
    next: NextFunction
){
    const { error, value } = createUserSchema.validate(req.body);
    console.log(value)

    if(error) {
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