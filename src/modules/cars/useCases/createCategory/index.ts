import {CreateCategoryUseCase} from "./CreateCategoryUseCase";
import {CategoryRepository} from "../../repositories/CategoryRepository";
import {CreateCategoryController} from "./CreateCategoryController";

export default (): CreateCategoryController => {
    const categoriesRepository = new CategoryRepository();
    const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
    return new CreateCategoryController(createCategoryUseCase);
}


