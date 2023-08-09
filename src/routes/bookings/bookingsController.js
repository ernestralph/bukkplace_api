  function getBooking(req, res){
   console.log('this function should return a booking by id')
  }
  function getBookings(req, res){
   console.log('this function should return all booking')
  }
  function createBooking(req, res){
   console.log('this function should create a booking')
  }
  function updateBooking(req, res){
   console.log('this function should update a booking')
  }
  function deleteBooking(req, res){
   console.log('this function should delete a booking')
  }

  module.exports = ({
   getBooking,
   getBookings,
   createBooking,
   updateBooking,
   deleteBooking
  })