import {IUserDTO} from "./IUserDTO";

export class IAuthDTO {
  user: IUserDTO;
  token: string;
}