const express= require("express")
const dotenv=require('dotenv')
const app = express()
const apirouter=require("./routes/routes")
dotenv.config()
app.use("/",apirouter)
app.listen(process.env.PORT || 3000,()=>{
    console.log("server started .")
})




