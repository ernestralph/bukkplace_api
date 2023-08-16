  const {
  saveBooking,
  getBookings,
  getBooking,
  updateBooking,
  deleteBooking,
  } = require('../../models/booking.model');
  
  
  async function httpGetBooking(req, res){
    try {
      const booking = await getBooking(req.query.id);
      if(booking){
        return res.status(200).json(booking)
      }else{
        return res.status(404).json({"error":"booking cannot be found!"})
      }
      
    } catch (error) {
       return res.status(500).json({"error":"Something went wrong!"})
    }
  }

  async function httpGetBookings(req, res){
   try {
      const bookings = await getBookings();
      if(bookings.length >= 0){
        return res.status(404).json({"error":"no booking record found!"})
      }else{
        return res.status(200).json(bookings)
      }
      
    } catch (error) {
       return res.status(500).json({"error":"Internal Server Error!"})
    }
  }

  async function httpSaveBooking(req, res){
   console.log('this function should create a booking')
  }

  function httpUpdateBooking(req, res){
   console.log('this function should update a booking')
  }

  function httpDeleteBooking(req, res){
   console.log('this function should delete a booking')
  }

  module.exports = ({
   httpGetBooking,
   httpGetBookings,
   httpSaveBooking,
   httpUpdateBooking,
   httpDeleteBooking
  })