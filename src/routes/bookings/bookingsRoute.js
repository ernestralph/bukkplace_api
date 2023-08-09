const express = require('express')
const {
   getBooking,
   getBookings,
   createBooking,
   updateBooking,
   deleteBooking
} = require('./bookingsController')

const bookingRouter = express.Router()


bookingRouter.get('/', getBookings);
bookingRouter.get('/:id', getBooking);
bookingRouter.post('/', createBooking);
bookingRouter.put('/:id', updateBooking);
bookingRouter.delete('/:id', deleteBooking);

module.exports = bookingRouter