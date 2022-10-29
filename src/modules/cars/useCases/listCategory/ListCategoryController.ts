import {Request, Response} from "express";
import {container} from "tsyringe";
import {ListCategoryUseCase} from "@modules/cars/useCases/listCategory/ListCategoryUseCase";

export class ListCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoryUseCase = container.resolve(ListCategoryUseCase)

    return response.json(await listCategoryUseCase.execute());
  }
}
