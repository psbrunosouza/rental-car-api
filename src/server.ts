import express from 'express';
import CategoriesRoutes from "./routes/categories.routes";
import CpecificationsRoutes from "./routes/cpecificationsRoutes";

const app = express();

app.use(express.json());

app.use("/categories", CategoriesRoutes);
app.use("/specifications", CpecificationsRoutes)

app.listen(3333, () => {console.log('[API]: Server Started')})

