import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { DB_NAME } from '../constants.js'

dotenv.config({
    path: './.env'
})



const dbConnection = async () =>{

    try{

        const dbserver = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Mongoose Connected for  ${dbserver.connection.host}`)

    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
} 

export {dbConnection}