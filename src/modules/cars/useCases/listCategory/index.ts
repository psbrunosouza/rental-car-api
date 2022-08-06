import {CategoryRepository} from "../../repositories/CategoryRepository";
import {ListCategoryUseCase} from "./ListCategoryUseCase";
import {ListCategoryController} from "./ListCategoryController";

export default (): ListCategoryController => {
    const categoryRepository = new CategoryRepository();
    const listCategoriesUseCase = new ListCategoryUseCase(categoryRepository);
    return new ListCategoryController(listCategoriesUseCase);
}
