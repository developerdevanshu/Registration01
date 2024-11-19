import mongoose  from "mongoose";
const dbconnection=mongoose.connect("mongodb://localhost:27017/backendwithsherydb")
.then(()=>{
    console.log("DB connected")
})
export default dbconnection