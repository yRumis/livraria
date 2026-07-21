import Joi from "joi";

export const createBookSchema = Joi.object({
  title: Joi.string().trim().min(1).max(255).required(),

  isbn: Joi.string().length(13).required(),

  authorId: Joi.number().required(),

  categoryId: Joi.string().required(),

  publishedYear: Joi.number().optional(),
}).unknown(false);
