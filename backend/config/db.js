import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://abhaykumarkushwaha46:Abhay2001@cluster0.qqiolhj.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}