const express = require('express')
const controller = require('../../http/controllers/UserController')
const routes = express.Router()


routes.get('/', (req, res)=> {
  res.send('Hello world')
})

routes.post('/register', controller.register)

routes.post('/', controller.loggin)

module.exports = routes