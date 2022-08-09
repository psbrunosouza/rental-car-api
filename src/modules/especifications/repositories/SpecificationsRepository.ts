import {ISpecificationsRepository} from "./ISpecificationsRepository";
import {ISpecificationDTO} from "../dtos/ISpecificationDTO";
import {Specifications} from "../entities/Specifications";
import {getRepository, Repository} from "typeorm";
import {injectable} from "tsyringe";

@injectable()
export class SpecificationsRepository implements ISpecificationsRepository{
  private repository: Repository<Specifications>;

  constructor() {
    this.repository = getRepository(Specifications);
  }

  create({description, name}: ISpecificationDTO): Promise<ISpecificationDTO> {
    const specification = this.repository.create({
      description,
      name
    });

    return this.repository.save(specification);
  }

  findByName(name: string): Promise<ISpecificationDTO | undefined> {
    return this.repository.findOne({
      where: {name: name}
    });
  }
}