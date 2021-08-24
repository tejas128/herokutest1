const express= require("express")

const app = express()
const apirouter=require("./routes/routes")
app.use("/",apirouter)
app.listen(8000,()=>{
    console.log("server started .")
})




