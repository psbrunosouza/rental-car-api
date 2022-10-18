import {IUserDTO} from "../dtos/IUserDTO";

export interface IUsersRepository {
  save(data: IUserDTO): Promise<void>;
  findByEmail(email: string): Promise<IUserDTO | undefined>;
  findById(id: string): Promise<IUserDTO | undefined>;
}