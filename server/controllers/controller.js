const axios = require('axios')
const BASE_URL = 'https://crudcrud.com/api/11bd6ad88be945b8aaff52478683500c'

class Controller {
  static async addData(req, res ) {
    try {
      const {food} = req.body
      await axios.post(`${BASE_URL}/food`, food)
      res.status(201).json({message: 'added successfully'})
    } catch (err) {
      console.log(err)
    }
  } 
}

module.exports = Controller