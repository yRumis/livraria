import { Router } from "express";
import { validateCreateUser } from "../middlewares/validate-create-user.js";
import { makeCreateUserController } from "../factories/MakeCreateUserController.js";

const userRoutes = Router();

const createUserController = makeCreateUserController();

userRoutes.post(
  "/",
  validateCreateUser,
  createUserController.create.bind(createUserController),
);

export { userRoutes };