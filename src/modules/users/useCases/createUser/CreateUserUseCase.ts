import {inject, injectable} from "tsyringe";
import {IUsersRepository} from "../../repositories/IUsersRepository";
import {IUserDTO} from "../../dtos/IUserDTO";
import {hash} from "bcrypt";
import {AppError} from "../../../../shared/errors/AppError";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {
  }

  async execute(data: IUserDTO): Promise<void> {

    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if(userAlreadyExists){
      throw new AppError("User already exists");
    }

    const hashPassword = await hash(data.password, 8);

    return this.usersRepository.save({...data, password: hashPassword});
  }

}