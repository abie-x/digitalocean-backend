import express from "express";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import colors from 'colors'
import userRoutes from './routes/userRoutes.js'


//configuring the environmnt variables
dotenv.config()

//connecting the mongodb with  the express server
connectDB()

//declaring the app variable
const app =  express()

app.use(express.json())

app.use('/api/users', userRoutes)

const PORT  = 5000

app.listen(PORT, console.log(`server running on port ${PORT}`))