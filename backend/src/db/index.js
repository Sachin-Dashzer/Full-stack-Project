import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
});

const connectdb = async()=>{ 

    try{
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    }
    catch(err){
        console.log(err);
    }
}

export default connectdb;
