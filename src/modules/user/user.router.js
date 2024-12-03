import { Router } from "express";
import * as userController from './user.controller.js'


const userRouter = Router();
userRouter.post("/signup",userController.signup)
userRouter.post("/login",userController.login)
userRouter.get("/",userController.getAll)
userRouter.get("/:id",userController.getById)
userRouter.put("/:id",userController.update)
userRouter.delete("/:id",userController.deleteUser)

export default userRouter;