const express = require('express')
const {
   getBooking,
   getBookings,
   createBooking,
   updateBooking,
   deleteBooking
} = require('./bookingsController')

const bookingRouter = express.Router()


bookingRouter.get('/bookings', getBookings);
bookingRouter.get('/booking/:id', getBooking);
bookingRouter.post('/bookings', createBooking);
bookingRouter.put('/bookings/:id', updateBooking);
bookingRouter.delete('/bookings/:id', deleteBooking);

module.exports = bookingRouter