import { IUsersRepository } from "../IUsersRepository";
import { IUserDTO } from "../../dtos/IUserDTO";
import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { injectable } from "tsyringe";

@injectable()
export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(data: IUserDTO): Promise<void> {
    const user = this.repository.create({
      ...data,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<IUserDTO | undefined> {
    return await this.repository.findOne({
      where: {
        email,
      },
    });
  }
}
