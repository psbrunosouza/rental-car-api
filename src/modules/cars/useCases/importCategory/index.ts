import {CategoryRepository} from "../../repositories/CategoryRepository";
import {ImportCategoryUseCase} from "./ImportCategoryUseCase";
import {ImportCategoryController} from "./ImportCategoryController";

const categoryRepository = CategoryRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };