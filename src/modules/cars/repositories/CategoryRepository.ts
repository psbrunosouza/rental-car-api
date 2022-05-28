import {Category} from "../model/Category";
import {ICategoryDTO} from "../dtos/ICategoryDTO";
import {ICategoryRepository} from "./ICategoryRepository";



export class CategoryRepository implements ICategoryRepository{

  private static INSTANCE: CategoryRepository;

  private categories: Category[];

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoryRepository {
    if(!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }
    return CategoryRepository.INSTANCE;
  }

  create({name, description, created_at}: ICategoryDTO): ICategoryDTO {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at
    });

    this.categories.push(category);

    return category;
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    return this.categories.find(category => category.name === name);
  }
}