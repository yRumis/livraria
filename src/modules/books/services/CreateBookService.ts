import { randomUUID } from "node:crypto";
import type { CreateBookDTO } from "../dtos/create-book.dto.js";
import type { Book } from "../entities/book.entity.js";
import type { IBookRepository } from "../repositories/IBookRepository.js";


export class CreateBookService {
  constructor(private readonly _repository: IBookRepository) {}

  async execute(dto: CreateBookDTO): Promise<Book> {
        console.log("estamos no service dos LIVROS")

    const book: Book = {
      id: randomUUID(),
      title: dto.title,
      isbn: dto.isbn,
      authorId: dto.authorId,
      categoryId: dto.categoryId,
      available: true,
      publishedYear: dto.publishedYear,
      updatedAt: new Date(),
      createdAt: new Date(),
    };

    return this._repository.create(book);
  }
}
