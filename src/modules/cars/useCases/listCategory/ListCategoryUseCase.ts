import {ICategoryDTO} from "../../dtos/ICategoryDTO";
import {ICategoriesRepository} from "../../repositories/ICategoriesRepository";
import {inject, injectable} from "tsyringe";

@injectable()
export class ListCategoryUseCase {
  constructor(
      @inject('CategoriesRepository')
      private categoryRepository: ICategoriesRepository) {}

  async execute(): Promise<ICategoryDTO[]> {
    return await this.categoryRepository.list();
  }
}