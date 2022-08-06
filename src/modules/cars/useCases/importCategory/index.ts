import {CategoryRepository} from "../../repositories/CategoryRepository";
import {ImportCategoryUseCase} from "./ImportCategoryUseCase";
import {ImportCategoryController} from "./ImportCategoryController";

export default (): ImportCategoryController => {
    const categoryRepository = new CategoryRepository();
    const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
    return new ImportCategoryController(importCategoryUseCase)
}
