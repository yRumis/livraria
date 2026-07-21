import type { Request, Response } from "express";
import type { ListBooksService } from "../services/ListBooksService.js";

export class BookController {
  constructor(private readonly _listBookService: ListBooksService) {}

  async index(_: Request, res: Response): Promise<Response> {
    const books = await this._listBookService.execute();

    return res.status(200).json(books);
  }
}
