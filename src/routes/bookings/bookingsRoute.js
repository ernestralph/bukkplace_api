const express = require('express')

const bookingRouter = express.Router()


bookingRouter.get('/bookings', getBookings)
bookingRouter.post('/bookings', addBookings)
bookingRouter.delete('/bookings/:id', addBookings)