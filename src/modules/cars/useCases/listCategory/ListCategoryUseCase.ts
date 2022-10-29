import {inject, injectable} from "tsyringe";
import {ICategoryDTO} from "@modules/cars/dtos/ICategoryDTO";
import {ICategoriesRepository} from "@modules/cars/repositories/ICategoriesRepository";

@injectable()
export class ListCategoryUseCase {
  constructor(
      @inject('CategoriesRepository')
      private categoryRepository: ICategoriesRepository) {}

  async execute(): Promise<ICategoryDTO[]> {
    return await this.categoryRepository.list();
  }
}