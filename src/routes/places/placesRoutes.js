const express = require('express')
const {
  getPlace,
  getPlaces,
  addPlace,
  updatePlace,
  deletePlace
} = require('./bookingsController')

const bookingRouter = express.Router()


bookingRouter.get('/bookings', getBookings)
bookingRouter.get('/booking/:id', getBooking)
bookingRouter.post('/bookings', createBooking)
bookingRouter.update('/bookings/:id', updateBooking)
bookingRouter.delete('/bookings/:id', deleteBooking)