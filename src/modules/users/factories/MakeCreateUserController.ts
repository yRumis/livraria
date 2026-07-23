import { CreateUserController } from "../controllers/CreateUserController.js";
import { TypeORMUserRepository } from "../repositories/TypeORMUserRepository.js";
// import { UserMockRepository } from "../repositories/UserMockRepository.js";
import { CreateUserService } from "../services/CreateUserService.js";

export function makeCreateUserController() {
    const repository = new TypeORMUserRepository();

    const service = new CreateUserService(repository);

    return new CreateUserController(service);
}