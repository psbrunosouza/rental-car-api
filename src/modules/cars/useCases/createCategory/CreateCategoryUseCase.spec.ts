import { CreateCategoryUseCase } from "@modules/cars/useCases/createCategory/CreateCategoryUseCase";
import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-memory/CategoriesRepositoryInMenory";
import { ICategoryDTO } from "@modules/cars/dtos/ICategoryDTO";
import { AppError } from "@shared/errors/AppError";

let createCategoryUseCase: CreateCategoryUseCase;
let categoryRepositoryInMemory: CategoriesRepositoryInMemory;

describe("create category", () => {
  beforeAll(() => {
    categoryRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoryRepositoryInMemory
    );
  });

  it("should be able to create a new category", async () => {
    const category: ICategoryDTO = {
      name: "Category name",
      description: "Category description",
    };

    await createCategoryUseCase.execute(category);

    const categoryCreated = await categoryRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("should not be able to create a new category with same name", async () => {
    await expect(async () => {
      const category: ICategoryDTO = {
        name: "Category name",
        description: "Category description",
      };

      await createCategoryUseCase.execute(category);

      await categoryRepositoryInMemory.findByName(
        category.name
      );
    }).rejects.toBeInstanceOf(AppError);
  });
});
