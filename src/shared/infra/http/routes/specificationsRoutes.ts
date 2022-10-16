import { Router } from "express";
import { CreateSpecificationController } from "../../../../modules/especifications/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticated } from "../../../../middlewares/ensureAuthenticated";

const SpecificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

SpecificationsRoutes.post(
  "/",
  ensureAuthenticated,
  createSpecificationController.handle
);

export default SpecificationsRoutes;
