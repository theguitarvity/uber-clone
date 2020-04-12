const express = require('express')
const PriceController = require('./http/controllers/PriceController') 
const routes = express.Router()

routes.post('/price', PriceController.calculatePriceTrip)

module.exports = routes