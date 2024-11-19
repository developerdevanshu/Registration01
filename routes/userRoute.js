import express, { Router } from "express";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import cookieparser from "cookie-parser"




const router= express.Router();

router.get("/", async (req,res)=>{
res.render("main")


})
router.post("/Dashboard", async(req,res)=>{
    let {name,email,password,avatar}=req.body
   console.log(name)
  
     const createdUser =await userModel.create({
        name,
        email,
        password,
        avatar
     }) 
       res.send(createdUser)
 
       
      //token generating
     // const token=jwt.sign({email:userModel.email,id:userModel._id},"secretkey");
      

    

    
  
}) 

//creating another route
router.post("/login",async(req,res)=>{
  let {email,password}=req.body

  let user =await userModel.findOne({email:email});
  if(user)
       {
         bcrypt.compare(password,userModel.password,(err,result)=>{
            if(result){
                const token=jwt.sign({email:userModel.email,id:userModel._id},"secretkey");
                res.cookie("token",token)
                res.send("you can login ")
                }

          
             })
    }
    else{
      res.send("email or password is incorrect")
     }   


})








export default router;