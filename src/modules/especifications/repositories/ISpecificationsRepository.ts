import {ISpecificationDTO} from "../dtos/ISpecificationDTO";

export interface ISpecificationsRepository {
  create(data: ISpecificationDTO): ISpecificationDTO;
  findByName(name: string): ISpecificationDTO | undefined;
}