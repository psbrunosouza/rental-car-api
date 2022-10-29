import {inject, injectable} from "tsyringe";
import {AppError} from "@shared/errors/AppError";
import {ISpecificationsRepository} from "@modules/especifications/repositories/ISpecificationsRepository";
import {ISpecificationDTO} from "@modules/especifications/dtos/ISpecificationDTO";

@injectable()
export class CreateSpecificationUseCase {
  constructor(
      @inject('SpecificationRepository')
      private specificationRepository: ISpecificationsRepository
  ) {}

  async execute(data: ISpecificationDTO): Promise<ISpecificationDTO> {

    const specificationArealdyExists = await this.specificationRepository.findByName(data.name);

    console.log(specificationArealdyExists)

    if(specificationArealdyExists){
      throw new AppError("Especification already exists", 400);
    }

    return this.specificationRepository.create(data)
  }
}
