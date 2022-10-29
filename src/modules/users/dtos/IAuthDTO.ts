import {IUserDTO} from "@modules/users/dtos/IUserDTO";

export class IAuthDTO {
  user: IUserDTO;
  token: string;
}