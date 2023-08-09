const cors = require('cors')
const express = require('express')
const morgan = require('morgan')

const authRouter = require('./routes/auth/authRoutes')
const bookingRouter = require('./routes/bookings/bookingsRoute')
const placesRouter = require('./routes/places/placesRoutes')


const app = express();

const corsOptions = {
  origin: 'http://localhost:3000/',
}



app.use(cors(corsOptions))
app.use(morgan('combined'))

app.use(express.json())
app.use('/auth/', authRouter)
app.use('/bookings/', bookingRouter)
app.use('/places/', placesRouter)

module.exports = app
