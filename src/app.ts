import express from "express";
import { booksRoutes } from "./modules/books/routes/books.routes.js";
import { errorHandler } from "./shared/middlewares/error-handle.js";
import { userRoutes } from "./modules/users/routes/users.routes.js";

const app = express();

app.use(express.json());

app.use("/books", booksRoutes);
app.use("/users", userRoutes)

app.use(errorHandler);

export { app };
