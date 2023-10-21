import express from "express";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import colors from 'colors'
import userRoutes from './routes/userRoutes.js'
import User from "./models/userModel.js";
import asyncHandler from 'express-async-handler'
import res from "express/lib/response.js";
import City from "./models/cityModel.js";
import cityRoutes from './routes/cityRoutes.js'


//configuring the environmnt variables
dotenv.config()

//connecting the mongodb with  the express server
connectDB()

//mongodb+srv://admin:admin@cluster0.xqkeprg.mongodb.net/

//declaring the app variable
const app =  express()

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/cities', cityRoutes)

app.get('/', asyncHandler(async (req, res) => {
    const allCities  = await City.find({})
    res.status(200).send(allCities)
}))

const PORT  = 5001

app.listen(PORT, console.log(`server running on port ${PORT}`))