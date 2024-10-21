import { Router } from "express";
import * as userController from "../controllers/user";
const userRouter = Router();


userRouter.get("/", userController.getUser);
userRouter.post("/", userController.createUser);

export default userRouter