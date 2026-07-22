import { Router } from "express";

import { makeBookController } from "../factories/makeListBookController.js";
import { validateCreateBook } from "../middlewares/validate-create-book.js";
import { makeCreateBookController } from "../factories/makeCreateBookController.js";

const booksRoutes = Router();

const controller = makeBookController();
const createBookController = makeCreateBookController();

booksRoutes.get("/", controller.index.bind(controller));
booksRoutes.post(
  "/",
  validateCreateBook,
  createBookController.handle.bind(createBookController),
);

export { booksRoutes };
