import { Router } from "express";
import * as rentalController from "./rental.controller.js"

const rentalRouter = Router()

rentalRouter.post("/",rentalController.add)
rentalRouter.get("/",rentalController.getAll)
rentalRouter.get("/:id",rentalController.getById)
rentalRouter.put("/:id",rentalController.update)
rentalRouter.delete("/:id",rentalController.deleteRental)

export default rentalRouter;