import {ISpecificationDTO} from "../dtos/ISpecificationDTO";

export interface ISpecificationsRepository {
  create(data: ISpecificationDTO): Promise<ISpecificationDTO>;
  findByName(name: string): Promise<ISpecificationDTO | undefined>;
}