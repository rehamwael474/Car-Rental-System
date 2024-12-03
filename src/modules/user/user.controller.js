import { ObjectId } from "mongodb";
import { db } from "../../../db/connection.js"
import bcrypt from 'bcrypt'
const userModel = db.collection("users");


export const signup = async(req,res,next)=>{
    const {name,email,password,phone}= req.body
    const isEmail = await userModel.findOne({email})
    if(isEmail)
        return res.json({message:"email is already exist",success:false})
    const hashedPassword = bcrypt.hashSync(password,8)

    await userModel.insertOne({
        name,
        email,
        password:hashedPassword,
        phone
    })
   return res.json({message:"created",success:true})
}


export const login = async(req,res,next)=>{
    const {email,password}= req.body

    const user = await userModel.findOne({email})

    if (!user || !bcrypt.compareSync(password,user.password)){
        return res.json({message:"invalid info",success:false})
    }
    return res.json({message:"user login successfully",success:true})


}
export const getAll = async(req,res,next)=>{
    const users = await userModel.find().toArray();
    return users.length? res.json({message:"done",success:true,users})
    :res.json({message:"no user found",success:false})
}

export const getById = async(req,res,next)=>{
    const user = await userModel.findOne({_id:new ObjectId(req.params.id)});

    return user ? res.json({message:"done",success:true,user})
    :res.json({message:"no user found",success:false})
}
export const update = async(req,res,next)=>{
  const {id} = req.params
  const {name,phone,userId} = req.body
  if(id != userId) return res.json({message:"not the owner",success:false})

    const {matchedCount} = await userModel.updateOne(
        {_id: new ObjectId(id)},
        {
     $set:{name,phone},   
    }
)
return !matchedCount ?  res.json({message:"user not found"})
    : res.json({message:"user updated"})

}

export const deleteUser = async(req,res,next)=>{
    const {userId} = req.body
    const {id} = req.params

    if(userId != id) return res.json({message:"not the owner"})

        const {deletedCount} = await userModel.deleteOne({
            _id:new ObjectId(id)
        })

        return deletedCount ? res.json({message:"user deleted successfully",success:true})
        : res.json({message:"user not found",success:false
            
        })




}