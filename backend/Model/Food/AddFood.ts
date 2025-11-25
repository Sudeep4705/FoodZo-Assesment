import mongoose from "mongoose";
const Schema = mongoose.Schema


const foodSchema = new Schema({
    hotelname:{
        type:String,
        required:true
    },
    foodname:{
        type:String,
        required:true
    },
    image:{
        url:{
            type:String,
            required:true
        },
        filename:{
            type:String,
            required:true
        }
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    CreatedAt:{
        type:Date,
        default:Date.now()
    }

})

const Food = mongoose.model("Food",foodSchema)

export default Food
