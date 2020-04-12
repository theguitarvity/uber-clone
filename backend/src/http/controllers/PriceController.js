const service = require('../../domain/services/PriceService')

module.exports = {
  async calculatePriceTrip(request, response){
    const price = await service.calculateTripsPrice(request.body)
    
    return response.json(price)
  }
}