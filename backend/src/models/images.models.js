import mongoose, { Schema} from "mongoose";

const imgSchema = new Schema(
    {

        imgFile : {
            type : string , // claudinary url
            required : true
        },
        title : {
            type : string , 
            required : true
        },
        owner : {
            type : Schema.type.objectId ,
            ref : "User"
        }
        

    },
    {
        timestamps : true
    }
)


export const Images = mongoose.model("Images" , imgSchema)