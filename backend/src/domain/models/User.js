const mongoose = require('../../database')
const bcryp = require('bcryptjs')
const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    unique:true,
    required:true,
    lowercase:true
  },
  password:{
    type:String,
    required: true,
    select: false
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
})

UserSchema.pre('save', async function(next){
  const hash = await bcryp.hash(this.password, 10)
  this.password = hash

  next()
})
const User = mongoose.model('User', UserSchema)

module.exports = User