import { books } from "../../../../data/books.js";
import type { Book } from "../../entities/book.entity.js";
import type { IBookRepository } from "../IBookRepository.js";

export class BookMockRepository implements IBookRepository {
  async findAll(): Promise<ReadonlyArray<Book>> {
    return [...books];
  }

  async create(book: Book): Promise<Book> {
    books.push(book)

    return book;
  }
}
