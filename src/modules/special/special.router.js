import { Router } from "express";
import * as specialController from "./special.controller.js"
const specialRouter = Router()

specialRouter.get("/special1",specialController.special1)
specialRouter.get("/special2",specialController.special2)
specialRouter.get("/special3",specialController.special3)
specialRouter.get("/special4",specialController.special4)
export default specialRouter;