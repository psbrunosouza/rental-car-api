import { getRepository, Repository } from "typeorm";
import { injectable } from "tsyringe";
import {User} from "@modules/users/infra/typeorm/entities/User";
import {IUserDTO} from "@modules/users/dtos/IUserDTO";
import {IUsersRepository} from "@modules/users/repositories/IUsersRepository";

@injectable()
export class TypeormUserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async save(data: IUserDTO): Promise<void> {
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

  async findById(id: string): Promise<IUserDTO | undefined> {
    return await this.repository.findOne(id);
  }

}
