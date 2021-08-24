const data=require("../data.json")
const router=require('express').Router()

router.get("/",(req,res)=>{
 res.status(200).json({
     data
 }) 
})
module.exports=router