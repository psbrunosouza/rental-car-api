import {ICategoryDTO} from "../../dtos/ICategoryDTO";
import {ICategoriesRepository} from "../../repositories/ICategoriesRepository";
import {inject, injectable} from "tsyringe";

@injectable()
export class CreateCategoryUseCase {
  constructor(
      @inject('CategoriesRepository')
      private categoriesRepository: ICategoriesRepository) {}

  async execute({name, description}: ICategoryDTO): Promise<ICategoryDTO> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists){
      throw new Error("Category already exists");
    }


    return this.categoriesRepository.create({name, description});
  }
}