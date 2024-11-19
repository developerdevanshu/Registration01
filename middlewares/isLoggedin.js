import jwt from "jsonwebtoken"
import userModel from "../models/userModel"

const isLoggedin=async(req,res,next)=>{
    if(!req.cookies.token)
    {
     req.flash("error","you need login first")
     res.redirect("/login")
    }

    try{
        let decoded=jwt.verify(req.cookies.token,"secretkey")
        let user= await userModel
        .findOne({email:email})
        .select("-password")
        req.user = user
        next()
    }
    catch(error){
        req.flash("error","you need login first")
        res.redirect("/login")
       }

    


}
export default isLoggedin