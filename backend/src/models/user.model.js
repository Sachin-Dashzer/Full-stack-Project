import mongoose from "mongoose";


const users = new mongoose.Schema({

    name : String,
    email : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required : true
    }    

});

const Users = new mongoose.model("Users" , users);


export default Users;