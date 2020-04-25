const express = require('express')
const cors = require('cors')
const app = express()
const userRoutes = require('./routes/user/routes')

app.use(cors())
app.use(express.json())

app.use('/auth', userRoutes)

module.exports = app




