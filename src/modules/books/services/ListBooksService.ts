import type { Book } from "../entities/book.entity.js";
import type { IBookRepository } from "../repositories/IBookRepository.js";

export class ListBooksService {
  constructor(private readonly _bookRepository: IBookRepository) {}

  async execute(): Promise<ReadonlyArray<Book>> {
    return this._bookRepository.findAll();
  }
}
