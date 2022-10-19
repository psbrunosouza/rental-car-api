import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/users/repositories/implementations/UsersRepository";
import { AppError } from "../shared/errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const usersRepository = new UsersRepository();

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userId } = verify(
      token,
      "355a23b0542bb64cd36241241b838a22"
    ) as IPayload;

    const user = await usersRepository.findById(userId);

    if (!user) {
      throw new AppError("User doesn't exists", 404);
    }

    request.user = {
      id: userId,
    };

    next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
}
