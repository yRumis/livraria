import { HttpStatusCodes } from "../../../shared/constants/http-status-code.js";
import { ErrorCodes } from "../../../shared/errors/error-codes.js";
import { AppError } from "../../../shared/errors/error-handler.js";
import type { CreateUserDTO } from "../dto/CreateUserDTO.js";
import type { User } from "../entities/user.entity.js";
import type { IUserRepository } from "../repositories/IUserRepository.js";
import bcrypt from "bcrypt";

export class CreateUserService {
  constructor(private readonly _userRepository: IUserRepository) {}

  async execute(dto: CreateUserDTO) {
    const userExists = await this._userRepository.findByEmail(dto.email);
    console.log("estamos no service do usuario")
    if (userExists) {
      throw new AppError({
        message: "Email ja cadastrado",
        statusCode: HttpStatusCodes.CONFLICT,
        code: ErrorCodes.USER_ALREADY_EXISTS,
      });
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user: User = {
        id: crypto.randomUUID(),

        name: dto.name,

        email: dto.email,

        password: hashedPassword,

        createdAt: new Date(),

        updatedAt: new Date(),
    };

    const createdUser = await this._userRepository.create(user);

    return createdUser;
  }
}
