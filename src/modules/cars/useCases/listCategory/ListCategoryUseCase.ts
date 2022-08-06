import {ICategoryDTO} from "../../dtos/ICategoryDTO";
import {ICategoriesRepository} from "../../repositories/ICategoriesRepository";

export class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  async execute(): Promise<ICategoryDTO[]> {
    return await this.categoryRepository.list();
  }
}