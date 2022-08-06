import {ICategoryDTO} from "../../dtos/ICategoryDTO";
import {ICategoryRepository} from "../../repositories/ICategoryRepository";

export class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(): Promise<ICategoryDTO[]> {
    return await this.categoryRepository.list();
  }
}