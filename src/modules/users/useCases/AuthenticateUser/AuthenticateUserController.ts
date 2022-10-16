import {Request, Response} from "express";
import {container} from "tsyringe";
import {AuthenticateUserUseCase} from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const authenticatedUser = await authenticateUserUseCase.execute(data);

    return response.status(200).json(authenticatedUser);
  }
}