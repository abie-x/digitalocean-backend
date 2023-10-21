import asyncHandler from 'express-async-handler'
import City from '../models/cityModel.js'

const findCity = asyncHandler(async (req, res) => {
    const { name, country, rank } = req.body
  
    const cityExists = await City.findOne({ name })
  
    if (cityExists) {
      res.status(400).send('City already exists in the database')
    }
  
    const city = await City.create({
      name,
      country,
      rank,
    })
  
    if (city) {
      res.status(201).json({
        _id: city._id,
        name: city.name,
        country: city.country,
        rank: city.rank
      })
    } else {
      res.status(400).send('something went wrong')
    }
})

export {
    findCity
}