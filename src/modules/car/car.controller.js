import { ObjectId } from "mongodb"
import { db } from "../../../db/connection.js"
const carModel = db.collection("cars")


export const addCar = async(req,res,next)=>{
    const {name,model} = req.body
    
    await carModel.insertOne({name,model,rentalStatus:"available"})
    return res.json ({message:"created",success:true})

}
export const getAll = async (req,res,next)=>{
    const cars = await carModel.find().toArray();

    return cars.length? res.json({message:"done",success:true,cars})
    :res.json({message:"no car found",success:false})   
}

export const getById = async (req,res,next)=>{
    const car = await carModel.findOne({_id:new ObjectId(req.params.id)})

    return car 
    ?res.json({message:"done",success:true,car})
    :res.json({message:"no car found",success:false})   
}

export const updateCar = async (req,res,next) =>{
    const {id} = req.params;
    const {name} = req.body
    const {matchedCount} = await carModel.updateOne({_id:new ObjectId(id)},{$set:{name}})
    return matchedCount? res.json({message:"car updated"}):res.json({message:"car not found"})
}
export const deleteCar = async (req,res,next) =>{
    
    const {deletedCount} = await carModel.deleteOne({_id:new ObjectId(req.params.id)})
    return deletedCount? res.json({message:"car deleted"}):res.json({message:"car not found"})
}