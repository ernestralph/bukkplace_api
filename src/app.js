const cors = require('cors')
const express = require('express')
const morgan = require('morgan')




const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express();

app.use(cors(corsOptions))
app.use(morgan('combined'))

app.use(express.json)

module.exports = ({
 app,
})