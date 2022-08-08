import {Router} from "express";
import {CreateSpecificationController} from "../../../../modules/especifications/useCases/createSpecification/CreateSpecificationController";

const SpecificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

SpecificationsRoutes.post("/", createSpecificationController.handle);


export default SpecificationsRoutes;