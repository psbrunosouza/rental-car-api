import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import {sign} from "jsonwebtoken";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IUserDTO } from "../../dtos/IUserDTO";
import {IAuthDTO} from "../../dtos/IAuthDTO";

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: UsersRepository
  ) {}

  async execute({ email, password }: IUserDTO): Promise<IAuthDTO> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email or password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or password incorrect");
    }

    const token = sign({}, "355a23b0542bb64cd36241241b838a22", {
      subject: user.id,
      expiresIn: "1d"
    });

    return {
      user,
      token
    }
  }
}
