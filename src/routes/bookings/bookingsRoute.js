const express = require('express')
const {
   httpGetBooking,
   httpGetBookings,
   httpSaveBooking,
   httpUpdateBooking,
   httpDeleteBooking
} = require('./bookingsController')

const bookingRouter = express.Router()


bookingRouter.post('/', httpSaveBooking);
bookingRouter.get('/', httpGetBookings);
bookingRouter.put('/:id', httpUpdateBooking);
bookingRouter.get('/:id', httpGetBooking);
bookingRouter.delete('/:id', httpDeleteBooking);

module.exports = bookingRouter