import {IDefaultDTO} from "../../../shared/dtos/IDefaultDTO";

export class IUserDTO extends IDefaultDTO{
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  driverLicense: string;
  avatar: string;
}