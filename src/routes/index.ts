import CategoriesRoutes from "./categories.routes";
import SpecificationsRoutes from "./specificationsRoutes";
import {Router} from "express";

const routes = Router();

routes.use("/categories", CategoriesRoutes);
routes.use("/specifications", SpecificationsRoutes);

export { routes }