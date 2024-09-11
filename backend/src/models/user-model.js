import mongoose ,{ Schema } from "mongoose";



const Users = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
    
} , {timestamps:true})


export const User = mongoose.model('User' , Users)

