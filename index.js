const express= require("express")

const app = express()
const apirouter=require("./routes/routes")
app.use("/",apirouter)
app.listen(3000,()=>{
    console.log("server started .")
})




