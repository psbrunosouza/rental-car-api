import {ICategoryDTO} from "../../dtos/ICategoryDTO";
import {ICategoryRepository} from "../../repositories/ICategoryRepository";

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute({name, description}: ICategoryDTO): ICategoryDTO {
    const categoryAlreadyExists = this.categoryRepository.findByName(name);

    if(categoryAlreadyExists){
      throw new Error("Category already exists");
    }

    return this.categoryRepository.create({name, description, created_at: new Date()});
  }
}