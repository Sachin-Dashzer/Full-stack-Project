import mongoose from "mongoose";


const users = new mongoose.Schema({

    name : String,
    phone : {
        type : Number,
        required : true
    },

    email : {
        type : String,
        required: true
    },
    age : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    }

});

const Users = new mongoose.model("Users" , users);


export default Users;