import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique:[true, "Email Exist"]
  },
  password: {
    type: String,
    required:true
  },
  gender: {
    type: String
  },
  interests: {
    type: [String]
  }
},{timestamps:true})

const Users = mongoose.model('users',userSchema);
export {Users};





