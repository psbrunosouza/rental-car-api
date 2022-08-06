import {Request, Response} from "express";
import {CreateCategoryUseCase} from "./CreateCategoryUseCase";
import {container} from "tsyringe";

export class CreateCategoryController {

  constructor() {}

  async handle(request: Request, response: Response) {
    const {name, description} = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

    const category = await createCategoryUseCase.execute({name, description});

    return response.status(201).json(category);
  }
}
