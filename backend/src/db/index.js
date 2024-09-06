

import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectDB = async() =>{

    try{
        const connectionData = await  mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}?retryWrites=true&w=majority`);
    }
    catch(error){

        console.log(error);
        throw error;
    }
}


export default connectDB;