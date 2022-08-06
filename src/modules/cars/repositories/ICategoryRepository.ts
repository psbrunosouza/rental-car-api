import {Category} from "../entities/Category";
import {ICategoryDTO} from "../dtos/ICategoryDTO";

export interface ICategoryRepository {
  findByName(name: string): Promise<ICategoryDTO | undefined>;
  list(): Promise<ICategoryDTO[]>;
  create(data: ICategoryDTO): Promise<ICategoryDTO>;
}