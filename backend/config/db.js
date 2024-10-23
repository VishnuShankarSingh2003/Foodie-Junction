import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://foodiejunction:foodiejunction123@cluster0.rw70l.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


