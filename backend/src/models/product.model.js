import mongoose, { Schema } from "mongoose";


const productSchema = new Schema({


    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    rating: {
        type: String
    }


}, {
    timestamps: true
}
)




export const Product = mongoose.model("Product" , productSchema);