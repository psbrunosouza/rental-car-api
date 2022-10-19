import { Router } from "express";
import { CreateUserController } from "../../../../modules/users/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../../../../modules/users/useCases/updateUserAvatar/UpdateUserAvatarController";
import upload from "../../../../middlewares/upload";
import multer from "multer";
import {ensureAuthenticated} from "../../../../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const uploadAvatar = multer(upload.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"), updateUserAvatarController.handle);

export default usersRoutes;
