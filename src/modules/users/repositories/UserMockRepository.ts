import { users } from "../../../data/users.js";
import type { User } from "../entities/user.entity.js";
import type { IUserRepository } from "./IUserRepository.js";

export class UserMockRepository implements IUserRepository{
    async create(user: User): Promise<User> {

        const createdUser = {...user};

        users.push(createdUser);

        return createdUser;

    }

    async findByEmail(email: string): Promise<User | null> {
        const user = users.find(user=> user.email === email);

        return user ?? null;
    } 

}