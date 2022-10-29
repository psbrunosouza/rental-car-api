import {Router} from "express";
import multer from "multer";
import {ImportCategoryController} from "@modules/cars/useCases/importCategory/ImportCategoryController";
import {ListCategoryController} from "@modules/cars/useCases/listCategory/ListCategoryController";
import {CreateCategoryController} from "@modules/cars/useCases/createCategory/CreateCategoryController";


const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

const upload = multer({
  dest: "./tmp"
});

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoryController.handle)

categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle)

export default categoriesRoutes;