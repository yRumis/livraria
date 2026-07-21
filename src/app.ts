import express from "express";
import { booksRoutes } from "./modules/books/routes/books.routes.js";
import { errorHandler } from "./shared/middlewares/error-handle.js";

const app = express();

app.use(express.json());

app.use("/books", booksRoutes);

app.use(errorHandler);

export { app };
