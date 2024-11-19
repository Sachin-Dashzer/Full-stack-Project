
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { Product } from "../models/product.model.js";
import mongoose from "mongoose";


const productDetails = asyncHandler(async (req, res) => {


    const { name, price, category, rating } = req.body;

    
    if (
        [name, price , category , rating].some((field) => field?.trim() === "")
    ) {
        throw new apiError(404, "Every field is required")
    }

    const foundProduct = await Product.findOne({

        $or : [{name , category}]
    }
    )

    if(foundProduct){
        throw new apiError(404 , "product already exists")
    }


    const newProduct = await Product.create({
        name , price , category , rating
    })


    const finalProduct = await Product.findById(newProduct._id).select(
        "-rating"
    )

    if(!finalProduct){
        throw new apiError(405 , "Server error")
    }



    return res.status(200).json(
        new apiResponse(201 , finalProduct , "new Product added")
    )


})

export default productDetails