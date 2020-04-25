const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../../config/auth.json')
const authHelper = require('../../../helpers/auth')

const UserService = {
  async create(data){
    const { email } = data
    if(await User.findOne({email})){
      throw {
        status:400,
        message:"This e-mail is already registered"
      }
    }
    const user = await User.create(data)
    user.password = undefined
    const token = authHelper.generateToken({ id : user.id })

    return {user, token}
  },
  async authenticate(data){
    const { email, password } = data

    const user = await User.findOne({email}).select('+password')

    if(!user){
      throw {
        status:404,
        message:'E-mail not registered'
      }
    }

    if(!await bcrypt.compare(password, user.password)){
      throw {
        status:402,
        message:'Invalid password'
      }
    }
    user.password = undefined
    const token = authHelper.generateToken({ id : user.id })

    return {user, token}

  }
}

module.exports = UserService