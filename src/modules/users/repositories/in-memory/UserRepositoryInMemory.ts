import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { IUserDTO } from "@modules/users/dtos/IUserDTO";
import { User } from "@modules/users/infra/typeorm/entities/User";

export class UserRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async findByEmail(email: string): Promise<IUserDTO | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<IUserDTO | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async save(data: IUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, data)

    this.users.push(user);
  }
}
