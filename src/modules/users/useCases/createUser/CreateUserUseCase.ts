import {inject, injectable} from "tsyringe";
import {IUsersRepository} from "../../repositories/IUsersRepository";
import {IUserDTO} from "../../dtos/IUserDTO";
import {hash} from "bcrypt";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {
  }

  async execute(data: IUserDTO): Promise<void> {

    const hashPassword = await hash(data.password, 8);

    return this.usersRepository.create({...data, password: hashPassword});
  }

}