const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://localhost/uber-clone', 
  { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true 
  }
  )
mongoose.Promise = global.Promise

module.exports = mongoose