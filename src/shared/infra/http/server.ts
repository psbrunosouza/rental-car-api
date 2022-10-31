import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "@shared/container/index";

import swaggerUI from "swagger-ui-express";
import swaggerFile from "../../../swagger.json";
import { routes } from "@shared/infra/http/routes";
import { AppError } from "@shared/errors/AppError";
import "@shared/infra/typeorm/index";

const app = express();

app.use(express.json());

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        messsage: err.message,
      });
    } else {
      return response.status(500).json({
        status: "error",
        message: `Internal server error: ${err.message}`,
      });
    }
  }
);

app.listen(3333, () => {
  console.log("[API]: Server Started");
});
