import {Category} from "../model/Category";
import {ICategoryDTO} from "../dtos/ICategoryDTO";

export interface ICategoryRepository {
  findByName(name: string): Category | undefined;
  list(): Category[];
  create(data: ICategoryDTO): ICategoryDTO;
}