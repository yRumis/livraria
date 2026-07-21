import type { Request, Response } from "express";
import type { CreateBookService } from "../services/CreateBookService.js";
import type { CreateBookDTO } from "../dtos/create-book.dto.js";
import { HttpStatusCodes } from "../../../shared/constants/http-status-code.js";

export class CreateBookController {
    constructor( private readonly _createBookService: CreateBookService){}

    async handle(req: Request, res: Response): Promise<Response> {
        const dto = req.body as CreateBookDTO;

        const book = await this._createBookService.execute(dto)

        return res.status(HttpStatusCodes.CREATED).json({
            book: {
                title: book.title,
                id: book.id
            }
        })
    }
}