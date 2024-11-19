import mongoose from "mongoose";
const userschema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
  
      },
      email:{
          type:String,
        require:true,
        unique:true 
      },
      password:{
        type:String,
      require:true,
     
    },
    avatar:{
      type:Buffer,
    require:true
   
  }


},{timestamps:true})
const userModel= mongoose.model("usermodel",userschema)
export default userModel