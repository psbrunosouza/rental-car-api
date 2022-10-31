
import {getRepository, Repository} from "typeorm";
import {injectable} from "tsyringe";
import {ICategoryDTO} from "@modules/cars/dtos/ICategoryDTO";
import {Category} from "@modules/cars/infra/typeorm/entities/Category";
import {ICategoriesRepository} from "@modules/cars/repositories/ICategoriesRepository";

@injectable()
export class TypeormCategoriesRepository implements ICategoriesRepository{

  private repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({name, description}: ICategoryDTO): Promise<ICategoryDTO> {

    const createCategory = this.repository.create({
      name, description
    })

    return await this.repository.save(createCategory)
  }

  async list(): Promise<ICategoryDTO[]> {
    return await this.repository.find();
  }

  async findByName(name: string): Promise<ICategoryDTO | undefined> {
    return await this.repository.findOne({where: {name}});
  }
}