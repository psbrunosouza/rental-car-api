import {Router} from "express";
import categoriesRoutes from "./categories.routes";
import specificationsRoutes from "./specificationsRoutes";
import usersRoutes from "./users.routes";
import authenticateRoutes from "./authenticate.routes";

const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);
routes.use("/users", usersRoutes);
routes.use("/login", authenticateRoutes);

export { routes }