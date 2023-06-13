const express = require("express")
const { jobRoutes } = require("./Routes/Job.Route")
const { connection } = require("./config/db")
var cors = require('cors')
require('dotenv').config()

const app = express()


app.use(express.json())
app.use(cors())

app.use("/jobs", jobRoutes)


app.listen(process.env.port, async()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log("Error connecting", error)
    }

    console.log(`Server is listening on ${process.env.port}`)
    
})