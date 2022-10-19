import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";
import { AppError } from "../../../../shared/errors/AppError";

export class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const avatarFile = request.file?.filename;

    if (!avatarFile) {
      throw new AppError("no avatar selected");
    }

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    await updateUserAvatarUseCase.execute({ userId: id, avatar: avatarFile });

    return response.status(204).send();
  }
}
