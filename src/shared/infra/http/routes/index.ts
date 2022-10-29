import {Router} from "express";
import specificationsRoutes from "@shared/infra/http/routes/specificationsRoutes";
import usersRoutes from "@shared/infra/http/routes/users.routes";
import authenticateRoutes from "@shared/infra/http/routes/authenticate.routes";
import categoriesRoutes from "@shared/infra/http/routes/categories.routes";


const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);
routes.use("/users", usersRoutes);
routes.use("/login", authenticateRoutes);

export { routes }