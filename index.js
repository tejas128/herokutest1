const express= require("express")

const app = express()
const apirouter=require("./routes/routes")
app.use("/",apirouter)
app.listen(process.env.port || 3000,()=>{
    console.log("server started .")
})




