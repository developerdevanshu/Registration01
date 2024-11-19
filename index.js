import express from "express"
import dbconnection from "./db/db-connection.js"
import userModel from "./models/userModel.js"
import userRoute from "./routes/userRoute.js"
import cookieParser from "cookie-parser"





const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")





app.use("/",userRoute)
app.listen(3000)