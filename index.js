//import modules
import express from 'express'
import { connection } from './db/connection.js'
import userRouter from './src/modules/user/user.router.js'
import carRouter from './src/modules/car/car.router.js'
import rentalRouter from './src/modules/rental/rental.router.js'
import specialRouter from './src/modules/special/special.router.js'
//create server
const app = express()
const port = 3000
//create connection
connection()
app.use(express.json())

app.use("/user",userRouter)
app.use("/cars",carRouter)
app.use("/rentals",rentalRouter)
app.use("/special",specialRouter)

//listen server
app.listen(port,()=>{
    console.log('server is running on port',port)
})