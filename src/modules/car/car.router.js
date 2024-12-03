import { Router } from "express";
import * as carController from "./car.controller.js"

const carRouter = Router();
carRouter.post("/",carController.addCar)
carRouter.get("/",carController.getAll)
carRouter.get("/:id",carController.getById)
carRouter.put("/:id",carController.updateCar)
carRouter.delete("/:id",carController.deleteCar)
export default carRouter;