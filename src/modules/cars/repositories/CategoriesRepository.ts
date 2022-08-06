import {Category} from "../entities/Category";
import {ICategoryDTO} from "../dtos/ICategoryDTO";
import {ICategoriesRepository} from "./ICategoriesRepository";
import {getRepository, Repository} from "typeorm";
import {injectable} from "tsyringe";

@injectable()
export class CategoriesRepository implements ICategoriesRepository{

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