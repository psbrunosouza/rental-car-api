import {CategoriesRepository} from "../../repositories/CategoriesRepository";
import {ListCategoryUseCase} from "./ListCategoryUseCase";
import {ListCategoryController} from "./ListCategoryController";

export default (): ListCategoryController => {
    const categoryRepository = new CategoriesRepository();
    const listCategoriesUseCase = new ListCategoryUseCase(categoryRepository);
    return new ListCategoryController(listCategoriesUseCase);
}
