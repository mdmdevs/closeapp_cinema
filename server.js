import express from "express";
import dotenv from 'dotenv'
const app = express()

dotenv.config()



app.get("/try",(req,res)=>{
    res.send({name:"Emmanuel"})

})
app.listen(process.env.PORT,()=>{
console.log(`Server is listening at port: ${process.env.PORT}`)

})