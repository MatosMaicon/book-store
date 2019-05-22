const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./config/routes')(app)

app.listen(3001, () => {
  console.log('Server started on port 3001')
})