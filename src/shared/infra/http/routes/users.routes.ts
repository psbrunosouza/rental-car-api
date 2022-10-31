import { Router } from "express";
import multer from "multer";
import upload from "@shared/infra/http/middlewares/upload";
import {ensureAuthenticated} from "@shared/infra/http/middlewares/ensureAuthenticated";
import {CreateUserController} from "@modules/users/useCases/createUser/CreateUserController";
import {UpdateUserAvatarController} from "@modules/users/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();

const uploadAvatar = multer(upload.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"), updateUserAvatarController.handle);

export default usersRoutes;
