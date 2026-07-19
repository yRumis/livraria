import { type Book } from "../entities/book.entity.js";

export interface IBookRepository {
    findAll(): Promise<ReadonlyArray<Book>>
}