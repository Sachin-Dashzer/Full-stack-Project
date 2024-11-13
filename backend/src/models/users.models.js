import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            index: true,
            trim: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, "Password is required"]
        },
        refreshToken: {
            type: String

        },
        profileImg: {
            type: String, // claudinary url
            default: ""
        },
        watchHistory: {
            type : Schema.Types.ObjectId,
            ref : "images"
        }
    }, 
    { timestamps: true }

)



export const User = mongoose.model("User", userSchema);