import {IDefaultDTO} from "../../../shared/dtos/IDefaultDTO";

export class IUserDTO extends IDefaultDTO{
  id?: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  driverLicense: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}