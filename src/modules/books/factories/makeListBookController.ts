import { BookController } from "../controllers/ListBookController.js";
import { BookMockRepository } from "../repositories/mock/BookMockRepository.js";
import { ListBooksService } from "../services/ListBooksService.js";


export function makeBookController(): BookController {
    const repository = new BookMockRepository();

    const service = new ListBooksService(repository);

    return new BookController(service);
}