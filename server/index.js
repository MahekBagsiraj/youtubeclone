import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

import userRoutes from './routes/user.js'
const app=express()
dotenv.config()
app.get('/',(req,res)=>{
    res.send("hello")
})
app.use('/user',userRoutes)
const  PORT = process.env.PORT


app.listen(PORT,()=>{
    console.log(`Server Running on PORT ${PORT}`)
})

const DB_URL = process.env.CONNECTION_URL

mongoose.connect(DB_URL,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("MongoDB database connected")
}).catch((error)=>{
    console.log(error)
})