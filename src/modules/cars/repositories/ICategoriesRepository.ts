import {Category} from "../entities/Category";
import {ICategoryDTO} from "../dtos/ICategoryDTO";

export interface ICategoriesRepository {
  findByName(name: string): Promise<ICategoryDTO | undefined>;
  list(): Promise<ICategoryDTO[]>;
  create(data: ICategoryDTO): Promise<ICategoryDTO>;
}