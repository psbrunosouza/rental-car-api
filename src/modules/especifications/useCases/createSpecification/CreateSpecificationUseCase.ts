import {inject, injectable} from "tsyringe";
import {ISpecificationDTO} from "../../dtos/ISpecificationDTO";
import {ISpecificationsRepository} from "../../repositories/ISpecificationsRepository";
import {AppError} from "../../../../shared/errors/AppError";

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
