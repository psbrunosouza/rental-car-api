import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { ICategoryDTO } from "@modules/cars/dtos/ICategoryDTO";

export class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async create(data: ICategoryDTO): Promise<ICategoryDTO> {
    const category = new Category();

    Object.assign(category, data);

    this.categories.push(category);

    return category;
  }

  async findByName(name: string): Promise<ICategoryDTO | undefined> {
    return this.categories.find((category) => category.name === name);
  }

  async list(): Promise<ICategoryDTO[]> {
    return this.categories;
  }
}
