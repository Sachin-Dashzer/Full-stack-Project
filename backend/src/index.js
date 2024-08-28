// const express = require('express');
// require('dotenv').config();


import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js';


import Users from "./models/user.model.js";








dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .then(() => {

        app.get('/', (req, res) => {
            res.send('Hello World');
        });
    })
    .catch((error) => {
        console.log(error);
    });



(

    async () => {

        // 1. Create -: 

        // To create a single data entry
        // const ss = await Users.create({
        //     name : "Dashzer",
        //     email : "saching@gmail.com",
        //     password : "erdfh234"
        // })
        // console.log(ss);


        // To insert multiple data entry
        // const newUsers = await Users.insertMany([
        //     {
        //         "name": "Alice Johnson",
        //         "email": "alice.johnson@example.com",
        //         "password": "password123"
        //     },
        //     {
        //         "name": "Bob Smith",
        //         "email": "bob.smith@example.com",
        //         "password": "qwerty456"
        //     },
        //     {
        //         "name": "Charlie Brown",
        //         "email": "charlie.brown@example.com",
        //         "password": "letmein789"
        //     },
        //     {
        //         "name": "Diana Prince",
        //         "email": "diana.prince@example.com",
        //         "password": "wonderwoman321"
        //     },
        //     {
        //         "name": "Ethan Hunt",
        //         "email": "ethan.hunt@example.com",
        //         "password": "missionImpossible007"
        //     }
        // ]
        // )
        // console.log(newUsers);



        // 2. Read data -:

        // To find all data in datalist 
           console.log(alldata);

        // To find multiple data 
        // const specialData = await Users.find({ name : "Dashzer"});
        // console.log(specialData)



        // 3. Update -:

        // Update a single user
        // const updatedUser = await Users.findOneAndUpdate();
        // console.log('updatedUser');

        // Update multiple users
        // const updatedUsers = await Users.updateMany();
        // console.log('updatedUsers');




        // 4. Delete -: 


        // To delete one singular data 
        // const deleteuser = await Users.findOneAndDelete({name : "Dashzer"});
        // console.log(deleteuser)

        // To delete multiple user data from given Collection
        // const deletedUsers = await Users.deleteMany({ name: 'Dashzer' });
        // console.log(deletedUsers)


    }



)();



















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















