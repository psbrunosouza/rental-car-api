import { Router } from "express";
import {ensureAuthenticated} from "@shared/infra/http/middlewares/ensureAuthenticated";
import {
  CreateSpecificationController
} from "@modules/especifications/useCases/createSpecification/CreateSpecificationController";


const SpecificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

SpecificationsRoutes.post(
  "/",
  ensureAuthenticated,
  createSpecificationController.handle
);

export default SpecificationsRoutes;
