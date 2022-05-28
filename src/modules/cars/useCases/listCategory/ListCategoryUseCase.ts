import {ICategoryDTO} from "../../dtos/ICategoryDTO";
import {ICategoryRepository} from "../../repositories/ICategoryRepository";

export class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute(): ICategoryDTO[] {
    return this.categoryRepository.list();
  }
}