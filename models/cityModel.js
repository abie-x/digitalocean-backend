import mongoose from "mongoose";

const citySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    rank: {
        type: Number,
        required: true
    }
})

const City = mongoose.model('City', citySchema)

export default City