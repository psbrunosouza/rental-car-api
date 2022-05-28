import {CreateSpecificationUseCase} from "./CreateSpecificationUseCase";
import {CreateSpecificationController} from "./CreateSpecificationController";
import {SpecificationsRepository} from "../../repositories/SpecificationsRepository";

const specificationRepository = SpecificationsRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController }