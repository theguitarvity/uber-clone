const service = require('../../domain/services/UserService')
module.exports={
  async register(request, response){
    try{
      const user = await service.create(request.body)

      return response.json({user})
    }
    catch(err){
      return response.status(err.status).send({
        error: err.message
      })
    }
  },
  async loggin(request, response){
    try {
      const user = await service.authenticate(request.body)

      return response.json({user})
      
    } catch (err) {
      return response.status(err.status).send({
        error:err.message
      })
    }
  }
}
