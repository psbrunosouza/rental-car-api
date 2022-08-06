import {ICategoryDTO} from "../../dtos/ICategoryDTO";
import {ICategoryRepository} from "../../repositories/ICategoryRepository";

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute({name, description}: ICategoryDTO): Promise<ICategoryDTO> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(name);

    if(categoryAlreadyExists){
      throw new Error("Category already exists");
    }

    return this.categoryRepository.create({name, description});
  }
}