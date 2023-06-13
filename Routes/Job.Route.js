const express = require('express')
const { jobModel } = require('../Models/JobModel')

const jobRoutes = express.Router()


// Get
jobRoutes.get("/list", async(req,res)=>{
    try {
        let post = await jobModel.find()
        res.status(200).json({msg:"success", post})
    } catch (error) {
        res.status(400).json({msg:"error", error: error})
    }
})

// Post
jobRoutes.post("/post", async(req,res)=>{

    try {
        let post = await jobModel.create(req.body)
        await post.save()
        res.status(200).json({msg:"success posted"})        
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})

//Filter by role
jobRoutes.get("/filter", async(req, res)=>{
    let {role} = req.query

    try {
        let filterRole;
        if(role){
            filterRole = await jobModel.find({role})
        }

        res.status(200).send(filterRole)
    } catch (error) {
        res.status(400).send({"err": error.message})
    }
})


module.exports = {jobRoutes}