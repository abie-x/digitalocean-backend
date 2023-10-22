import asyncHandler from 'express-async-handler'
import User from "../models/userModel.js";
import nodemailer from 'nodemailer'

//create components for transporting the mail
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abhiramzmenon@gmail.com',
    pass: 'rsgwlnlrmsthvwqt'
  }
})

let mailOptions = {
  from: 'abhiramzmenon@gmail.com',
  to: 'apespotdigital@gmail.com',
  subject: 'Testing node mailer',
  text: `Here's to the crazy ones`
}

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

const redirectUser = asyncHandler(async (req, res) => {
  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.log('error', error)
      res.status(400).send('soemthing went wrong')
    } else {
      console.log('Emails sent to ', mailOptions.to)
      res.status(200).send('Email sent')
    }
  })
})

export {
    registerUser,
    redirectUser
}