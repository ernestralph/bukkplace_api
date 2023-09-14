const express = require('express')
const {
   httpGetBooking,
   httpGetBookings,
   httpSaveBooking,
   httpUpdateBooking,
   httpDeleteBooking,
   httpUnBookPlace
} = require('./bookingsController')

const bookingRouter = express.Router()


bookingRouter.post('/', httpSaveBooking);
bookingRouter.get('/:id', httpGetBooking);
bookingRouter.get('/', httpGetBookings);
bookingRouter.put('/', httpUpdateBooking);
bookingRouter.put('/unbook/', httpUnBookPlace);
bookingRouter.delete('/', httpDeleteBooking);

module.exports = bookingRouter