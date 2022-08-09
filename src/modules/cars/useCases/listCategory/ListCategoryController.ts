import {Request, Response} from "express";
import {ListCategoryUseCase} from "./ListCategoryUseCase";
import {container} from "tsyringe";

export class ListCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoryUseCase = container.resolve(ListCategoryUseCase)

    return response.json(await listCategoryUseCase.execute());
  }
}
