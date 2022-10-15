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

  async create({description, name}: ISpecificationDTO): Promise<ISpecificationDTO> {
    const specification = this.repository.create({
      description,
      name
    });

    return await this.repository.save(specification);
  }

  async findByName(name: string): Promise<ISpecificationDTO | undefined> {
    return await this.repository.findOne({
      where: {name: name}
    });
  }
}