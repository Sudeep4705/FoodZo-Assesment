import mongoose from "mongoose";
const Schema = mongoose.Schema
const AdminSchema = new Schema({
  username: {
    type: String,
    required: true,   
  },
  email: {
    type: String,
    required: true,   
    unique: true,     
  },
  password: {
    type: String,
    required: true,   
  },
  role: {
    type: String,
    enum: ["Admin", "User"],  
    default: "Admin",          
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
export default Admin
