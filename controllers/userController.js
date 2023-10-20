import asyncHandler from 'express-async-handler'
import User from "../models/userModel.js";

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
  
    const userExists = await User.findOne({ email })
  
    if (userExists) {
      res.status(400).send('User already exists')
    }
  
    const user = await User.create({
      name,
      email,
      password,
    })
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
    } else {
      res.status(400).send('something went wrong')
    }
})

export {
    registerUser
}