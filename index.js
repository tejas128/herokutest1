const express= require("express")

const app = express()
const apirouter=require("./routes/routes")
app.use("/api",apirouter)
app.listen(8000,()=>{
    console.log("server started .")
})




