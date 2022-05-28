import {Router, Request, Response} from "express";
import {createSpecificationController} from "../modules/especifications/useCases/createSpecification";

const SpecificationsRoutes = Router();

SpecificationsRoutes.post("/", (request: Request, response: Response) => {
  return createSpecificationController.handle(request, response)
});


export default SpecificationsRoutes;