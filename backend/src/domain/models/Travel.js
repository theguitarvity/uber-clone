const mongoose = require('../../database')

const TravelSchema = new mongoose.Schema({
    destiny: {
        type:String,
        required:true
    },
    start:{
        type:String,
        required:true
    },
    duracao:{
        type: Number,
        required:true
    },
    distance:{
        type:Number,
        required:true
    }
})

const Travel = mongoose.model('Travel', TravelSchema)

module.exports = Travel