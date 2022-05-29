import {CategoryRepository} from "../../repositories/CategoryRepository";
import {parse} from "csv-parse";
import fs from "fs";
import {ICategoryDTO} from "../../dtos/ICategoryDTO";

export class ImportCategoryUseCase {

  constructor(private categoryRepository: CategoryRepository) {
  }

  private loadCategories(file: Express.Multer.File | undefined): Promise<ICategoryDTO[]> {

    return new Promise((resolve, reject) => {
      const categories: ICategoryDTO[] = [];

      if (!file) {
        throw new Error("File is undefined")
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

    categories.map((category) => {
      const categoryExists = this.categoryRepository.findByName(category.name);

        if(!categoryExists){
          this.categoryRepository.create(category);
        }
      }
    )
  }
}