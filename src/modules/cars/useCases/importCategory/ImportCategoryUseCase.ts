import {CategoryRepository} from "../../repositories/CategoryRepository";
import {parse} from "csv-parse";
import fs from "fs";

export class ImportCategoryUseCase {

  constructor(private categoryRepository: CategoryRepository) {
  }

  execute(file: Express.Multer.File | undefined): void {

    if (!file) {
      throw new Error("File is undefined")
    }

    const stream = fs.createReadStream(file.path);

    const parser = parse();

    stream.pipe(parser);

    parser.on("data", async (line) => {
      console.log(line)
    })
  }
}