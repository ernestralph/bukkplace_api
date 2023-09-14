const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const cookieParser = require('cookie-parser');


const authRouter = require('./routes/auth/authRoutes')
const bookingRouter = require('./routes/bookings/bookingsRoute')
const placesRouter = require('./routes/places/placesRoutes')


const corsOptions = {
  origin: 'http://localhost:3000/',
}

const app = express();


app.use(helmet())
app.use(cors(corsOptions))
app.use(morgan('combined'))
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use('/auth/', authRouter)
app.use('/bookings/', bookingRouter)
app.use('/places/', placesRouter)

module.exports = app
