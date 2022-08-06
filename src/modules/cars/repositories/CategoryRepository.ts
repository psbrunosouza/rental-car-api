import {Category} from "../entities/Category";
import {ICategoryDTO} from "../dtos/ICategoryDTO";
import {ICategoryRepository} from "./ICategoryRepository";
import {getRepository, Repository} from "typeorm";

export class CategoryRepository implements ICategoryRepository{

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