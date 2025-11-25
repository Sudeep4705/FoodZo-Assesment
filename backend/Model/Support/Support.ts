import mongoose from "mongoose";
const Schema = mongoose.Schema

const supportSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const Support  = mongoose.model("Support",supportSchema)
export default Support;