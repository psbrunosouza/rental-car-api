import {IUserDTO} from "../dtos/IUserDTO";

export interface IUsersRepository {
  create(data: IUserDTO): Promise<void>
}