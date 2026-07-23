import { AppDataSource } from "../../../shared/database/data-source.js";
import { User } from "../entities/user.entity.js";
import type { IUserRepository } from "./IUserRepository.js";

export class TypeORMUserRepository implements IUserRepository {
  private repository = AppDataSource.getRepository(User);

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });

    return user ?? null;
  }

  async create(user: User): Promise<User> {
    const createdUser = await this.repository.save(user);

    return createdUser;
  }
}
