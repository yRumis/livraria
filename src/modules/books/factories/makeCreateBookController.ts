import { CreateBookController } from "../controllers/CreateBookController.js";
import { BookMockRepository } from "../repositories/mock/BookMockRepository.js";
import { CreateBookService } from "../services/CreateBookService.js";

export function makeCreateBookController(){
    const repository = new BookMockRepository();

    const service = new CreateBookService(repository);

    return new CreateBookController(service);
}