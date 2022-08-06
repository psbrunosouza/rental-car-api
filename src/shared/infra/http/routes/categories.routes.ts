import {Router, Request, Response} from "express";
import multer from "multer";
import listCategoriesController from "../../../../modules/cars/useCases/listCategory";
import importCategoryController from "../../../../modules/cars/useCases/importCategory";
import {CreateCategoryController} from "../../../../modules/cars/useCases/createCategory/CreateCategoryController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

const upload = multer({
  dest: "./tmp"
});

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (request: Request, response: Response) => {
  return listCategoriesController().handle(request, response);
})

categoriesRoutes.post("/import", upload.single("file"), (request: Request, response: Response) => {
  return importCategoryController().handle(request, response);
})

export default categoriesRoutes;