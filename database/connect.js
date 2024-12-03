import mongoose from "mongoose"

export const db  = mongoose.connect("mongodb://localhost:27017/JwelleryData")
.then(()=>console.log("connected"))
.catch(err=>console.error("Error connecting to mongoDB: " , err))



