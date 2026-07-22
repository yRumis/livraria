import type { User } from "../entities/user.entity.js";

export interface IUserRepository {
    create(user: User): Promise<User>;

    findByEmail(email: string): Promise<User | null>;
}