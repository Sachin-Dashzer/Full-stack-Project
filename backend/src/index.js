
import express from 'express';
const app = express();

import connectDB from './db/index.js';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const PORT = process.env.PORT || 3000;


connectDB()
    .then(() => {

        console.log("database connected");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

        app.get('/', (req, res) => {
            res.send("everythings fine till now");

        })

    })
    .catch((err) => {

        console.log(err);
    })



app.Post('/api/form', (req, res) => {

    const { name,
        phone,
        email,
        age,
        address } = req.body;

    console.log('Received data:', {
        name,
        phone,
        email,
        age,
        address
    });
})

































































































// import connectDB from './db/index.js';
// import Users from "./models/user.model.js";
// import mongoose from 'mongoose';

// import cors from 'cors';



// // express files
// import express from 'express';
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());




// app.post('/api/form', (req, res) => {

//     const { name,
//         phone,
//         email,
//         age,
//         address } = req.body;

//     console.log('Received data:', {
//         name,
//         phone,
//         email,
//         age,
//         address
//     });

//     res.json({ message: 'Form data received successfully!' });

// });












// // env variables files
// import dotenv from 'dotenv';
// dotenv.config();

// const PORT = process.env.PORT || 3000;


// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// // Connecting database
// connectDB()
//     .then(() => {
//         console.log('Connected to MongoDB');

//     })

//     .catch(err => {
//         console.error('Error connecting to MongoDB:', err);
//     });

// // 2. method to connect database
// // const serverConnection = async() =>{
// //     try{
// //         await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`);
// //         console.log("Database Connected");
// //     }
// //     catch(error){
// //         console.log(error);
// //     }
// // }
// // serverConnection();



// // performing crud operation on database
// (

//     async () => {

//         // 1. Create -:

//         // To create a single data entry
//         // const ss = await Users.create({
//         //     name : "Dashzer",
//         //     email : "saching@gmail.com",
//         //     password : "erdfh234"
//         // })
//         // console.log(ss);


//         // To insert multiple data entry
//         // const newUsers = await Users.insertMany([
//         //     {
//         //         "name": "Alice Johnson",
//         //         "email": "alice.johnson@example.com",
//         //         "password": "password123"
//         //     },
//         //     {
//         //         "name": "Bob Smith",
//         //         "email": "bob.smith@example.com",
//         //         "password": "qwerty456"
//         //     },
//         //     {
//         //         "name": "Charlie Brown",
//         //         "email": "charlie.brown@example.com",
//         //         "password": "letmein789"
//         //     },
//         //     {
//         //         "name": "Diana Prince",
//         //         "email": "diana.prince@example.com",
//         //         "password": "wonderwoman321"
//         //     },
//         //     {
//         //         "name": "Ethan Hunt",
//         //         "email": "ethan.hunt@example.com",
//         //         "password": "missionImpossible007"
//         //     }
//         // ]
//         // )
//         // console.log(newUsers);



//         // 2. Read data -:

//         // To find all data in datalist
//         // const alldata = await Users.find();

//         //    console.log(alldata);

//         // To find multiple data
//         // const specialData = await Users.find({ name : "Dashzer"});
//         // console.log(specialData)



//         // 3. Update -:

//         // Update a single user
//         // const updatedUser = await Users.findOneAndUpdate();
//         // console.log('updatedUser');

//         // Update multiple users
//         // const updatedUsers = await Users.updateMany();
//         // console.log('updatedUsers');




//         // 4. Delete -:


//         // To delete one singular data
//         // const deleteuser = await Users.findOneAndDelete({name : "Dashzer"});
//         // console.log(deleteuser)

//         // To delete multiple user data from given Collection
//         // const deletedUsers = await Users.deleteMany({ name: 'Dashzer' });
//         // console.log(deletedUsers)


//     }



// )();




// // creating crud api's


// // create data api
// app.post('/api/product', async (req, res) => {
//     const newdata = await Users.create(req.body);
//     console.log(newdata);

//     res.status(200).json({
//         success: true,
//         newdata
//     })
// })

// // read data api
// app.get('/api/products', async (req, res) => {
//     const alldata = await Users.find();
//     console.log(alldata);

//     res.status(201).json({ success: true, alldata })
// })


// // Update data api
// app.put("/api/product/:id", async (req, res) => {
//     let newData = await Users.findById(req.params.id);
//     newData = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: false, runValidators: true });
//     if (!newData) {
//         res.status(404).json({
//             success: false,
//             massage: "data not found"
//         })
//     }

//     res.status(200).json({
//         success: true,
//         newData
//     })
// })


// // Delete data api
// app.delete("/api/product/:id", async (req, res) => {
//     let selectdata = await Users.findById(req.params.id);
//     if (!selectdata) {
//         res.status(404).json({
//             success: false,
//             massage: "data not found"
//         })
//     }

//     await selectdata.remove();

//     res.status(200).json({
//         success: true,
//         massage: "Data deleted successfully"

//     })
// })







