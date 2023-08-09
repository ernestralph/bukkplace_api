const cors = require('cors')
const express = require('express')
const morgan = require('morgan')

const authRouter = require('./routes/auth/authRoutes')
const bookingRouter = require('./routes/bookings/bookingsRoute')
const placesRouter = require('./routes/places/placesRoutes')


const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express();

app.use(cors(corsOptions))
app.use(morgan('combined'))

app.use(express.json)
app.use(authRouter)
app.use(bookingRouter)
app.use(placesRouter)

module.exports = ({
 app,
})