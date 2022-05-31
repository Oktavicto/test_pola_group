const express = require('express')
const app = express()
const port = 3000
const Controller = require('./controllers/controller')


app.post('/addFood', Controller.addData)

app.listen(port, () => {
  console.log(`Example app listening on ${port}`)
})