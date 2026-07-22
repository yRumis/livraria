import type { Request, Response } from "express";
import type { CreateUserService } from "../services/CreateUserService.js";
import type { CreateUserDTO } from "../dto/CreateUserDTO.js";
import { HttpStatusCodes } from "../../../shared/constants/http-status-code.js";

export class CreateUserController {
  constructor(private readonly _createUserService: CreateUserService) {}

  async create(req: Request, res: Response): Promise<Response> {

    const dto = req.body as CreateUserDTO;

    const createdUser = await this._createUserService.execute(dto);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userResponse } = createdUser;

    return res
    .status(HttpStatusCodes.CREATED)
    .json(userResponse);
  }
}
