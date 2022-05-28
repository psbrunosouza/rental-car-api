import {CategoryRepository} from "../../repositories/CategoryRepository";
import {ListCategoryUseCase} from "./ListCategoryUseCase";
import {ListCategoryController} from "./ListCategoryController";

const categoryRepository = CategoryRepository.getInstance();
const listCategoriesUseCase = new ListCategoryUseCase(categoryRepository);
const listCategoriesController = new ListCategoryController(listCategoriesUseCase);

export { listCategoriesController };