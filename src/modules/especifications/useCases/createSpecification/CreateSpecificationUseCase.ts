import {inject, injectable} from "tsyringe";
import {ISpecificationDTO} from "../../dtos/ISpecificationDTO";
import {ISpecificationsRepository} from "../../repositories/ISpecificationsRepository";

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
      throw new Error("Especification already exists");
    }

    return this.specificationRepository.create(data)
  }
}
