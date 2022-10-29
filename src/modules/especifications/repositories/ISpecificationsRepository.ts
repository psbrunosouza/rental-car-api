import {ISpecificationDTO} from "@modules/especifications/dtos/ISpecificationDTO";

export interface ISpecificationsRepository {
  create(data: ISpecificationDTO): Promise<ISpecificationDTO>;
  findByName(name: string): Promise<ISpecificationDTO | undefined>;
}