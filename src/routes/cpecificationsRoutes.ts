import {Router, Request, Response} from "express";
import {CreateSpecificationService} from "../modules/especifications/services/CreateSpecificationService";
import {SpecificationsRepository} from "../modules/especifications/repositories/SpecificationsRepository";

const CpecificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

CpecificationsRoutes.post("/", (request: Request, response: Response) => {
  const {name, description} = request.body;

  const createSpecificationService = new CreateSpecificationService(specificationsRepository);

  const specification = createSpecificationService.execute({name, description});

  return response.status(201).json(specification);
});


export default CpecificationsRoutes;