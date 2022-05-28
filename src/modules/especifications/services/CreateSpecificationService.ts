import {SpecificationsRepository} from "../repositories/SpecificationsRepository";
import {ISpecificationDTO} from "../dtos/ISpecificationDTO";

export class CreateSpecificationService {
  constructor(private specificationRepository: SpecificationsRepository) {}

  execute(data: ISpecificationDTO): ISpecificationDTO {

    const specificationArealdyExists = this.specificationRepository.findByName(data.name);

    if(specificationArealdyExists){
      throw new Error("Especification already exists");
    }

    return this.specificationRepository.create(data)
  }
}