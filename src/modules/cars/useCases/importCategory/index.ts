import {CategoriesRepository} from "../../repositories/CategoriesRepository";
import {ImportCategoryUseCase} from "./ImportCategoryUseCase";
import {ImportCategoryController} from "./ImportCategoryController";

export default (): ImportCategoryController => {
    const categoryRepository = new CategoriesRepository();
    const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
    return new ImportCategoryController(importCategoryUseCase)
}
