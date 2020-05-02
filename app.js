let express = require('express')
let mongoose = require('mongoose')
let config = require('./config')
let setupController = require('./controllers/setupController')
let apiController = require('./controllers/apiController')
let app = express()

app.use('/assets', express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
mongoose.connect(config.getDbConnections(),  { useUnifiedTopology: true, useNewUrlParser: true })
setupController(app)
apiController(app)
app.listen(1925)