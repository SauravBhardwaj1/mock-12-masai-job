const express = require('express')

const jobRoutes = express.Router()


jobRoutes.get("/", async(req,res)=>{
    try {
        res.status(200).json({msg:"success"})
    } catch (error) {
        res.status(400).json({msg:"error", error: error})
    }
})

jobRoutes.post("/post", async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})


module.exports = {jobRoutes}