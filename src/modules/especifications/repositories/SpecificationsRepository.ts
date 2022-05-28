import {ISpecificationsRepository} from "./ISpecificationsRepository";
import {ISpecificationDTO} from "../dtos/ISpecificationDTO";
import {Specifications} from "../model/Specifications";

export class SpecificationsRepository implements ISpecificationsRepository{
  private specifications: Specifications[] = []

  create(data: ISpecificationDTO): ISpecificationDTO {
    const specification = new Specifications();

    Object.assign(specification, {
      ...data,
      created_at: new Date()
    });

    this.specifications.push(specification);

    return specification;
  }

  findByName(name: string): ISpecificationDTO | undefined {
    return this.specifications.find(specification => specification.name === name);
  }
}