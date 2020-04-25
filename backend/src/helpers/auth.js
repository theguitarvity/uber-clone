const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

const EXPIRE_TIME = 86400

module.exports = {
  generateToken(params){
    return jwt.sign(params, authConfig.secret, {
      expiresIn: EXPIRE_TIME
    })
  }
}