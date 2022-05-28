import {Request, Response} from "express";
import {ListCategoryUseCase} from "./ListCategoryUseCase";

export class ListCategoryController {

  constructor(private listCategoriesUseCase: ListCategoryUseCase) {}

  handle(request: Request, response: Response) {
    const categories = this.listCategoriesUseCase.execute();

    return response.json(categories);
  }
}
