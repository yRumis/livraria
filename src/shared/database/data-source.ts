import "reflect-metadata";
import "dotenv/config"
import { DataSource } from "typeorm";
import { User } from "../../modules/users/entities/user.entity.js";


export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST || "",
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME || "",
  password: process.env.DATABASE_PASSWORD || "",
  database: process.env.DATABASE_NAME || "",
  entities: [User],
  migrations: [`${import.meta.dirname}/migrations/*.{ts,js}`],
  synchronize: false,
  logging: false,
});
