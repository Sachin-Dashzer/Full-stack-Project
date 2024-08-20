// const express = require('express');
// require('dotenv').config();


import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.then(()=>{

    app.get('/', (req, res) => {
        res.send('Hello World');
    });
})
.catch((error) => {
    console.log(error);
});





















// const serverConnection = async() =>{

//     try{
//         mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`);
//         console.log("Database Connected");
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// serverConnection();

















