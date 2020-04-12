const BASE_PRICE = 5
const MINUTE_PRICE = 2
const DISTANCE_PRICE = 2
const TAX = 2

module.exports = {
  calculateTripsPrice(data){
    const { distance, duration } = data
    
    return BASE_PRICE + (MINUTE_PRICE * duration)+ (DISTANCE_PRICE * distance) + TAX
  }
}