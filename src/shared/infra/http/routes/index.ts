import categoriesRoutes from "./categories.routes";
import specificationsRoutes from "./specificationsRoutes";
import {Router} from "express";
import usersRoutes from "./users.routes";

const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);
routes.use("/users", usersRoutes)

export { routes }