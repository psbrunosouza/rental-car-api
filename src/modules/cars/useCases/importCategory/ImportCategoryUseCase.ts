import {parse} from "csv-parse";
import fs from "fs";
import {inject, injectable} from "tsyringe";
import {AppError} from "@shared/errors/AppError";
import {ICategoryDTO} from "@modules/cars/dtos/ICategoryDTO";
import {ICategoriesRepository} from "@modules/cars/repositories/ICategoriesRepository";

@injectable()
export class ImportCategoryUseCase {

  constructor(
      @inject('CategoriesRepository')
      private categoryRepository: ICategoriesRepository) {
  }

  private loadCategories(file: Express.Multer.File | undefined): Promise<ICategoryDTO[]> {
    return new Promise((resolve, reject) => {
      const categories: ICategoryDTO[] = [];

      if (!file) {
        throw new AppError("File is undefined", 400)
      }

      const stream = fs.createReadStream(file.path);

      const parser = parse();

      stream.pipe(parser);

      parser.on("data", async (line) => {
        const [name, description] = line;

        categories.push({name, description});
      }).on("end", () => {
        fs.promises.unlink(file.path);
        return resolve(categories);
      });
    })
  }

  async execute(file: Express.Multer.File | undefined): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const categoryExists = await this.categoryRepository.findByName(category.name);

        if(!categoryExists){
          await this.categoryRepository.create(category);
        }
      }
    )
  }
}