import {inject, injectable} from "tsyringe";
import {AppError} from "@shared/errors/AppError";
import {ICategoryDTO} from "@modules/cars/dtos/ICategoryDTO";
import {ICategoriesRepository} from "@modules/cars/repositories/ICategoriesRepository";

@injectable()
export class CreateCategoryUseCase {
  constructor(
      @inject('CategoriesRepository')
      private categoriesRepository: ICategoriesRepository) {}

  async execute({name, description}: ICategoryDTO): Promise<ICategoryDTO> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists){
      throw new AppError("Category already exists", 400);
    }

    return this.categoriesRepository.create({name, description});
  }
}