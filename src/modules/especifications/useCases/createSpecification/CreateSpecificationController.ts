import {Request, Response} from "express";
import {CreateSpecificationUseCase} from "./CreateSpecificationUseCase";
import {container} from "tsyringe";


export class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {name, description} = request.body;

    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase);

    return response.status(201).json(await createSpecificationUseCase.execute({name, description}));
  }
}