import {IDefaultDTO} from "../../../shared/dtos/IDefaultDTO";

export interface ISpecificationDTO extends IDefaultDTO{
  id?: string;
  name: string,
  description: string,
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}