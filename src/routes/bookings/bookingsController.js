  const {
  saveBooking,
  getBookings,
  getBooking,
  updateBooking,
  deleteBooking,
  unBookPlace
  } = require('../../models/booking.model');
  
  async function httpSaveBooking(req, res){

   const data = await saveBooking(req.body);
    res.status(data.status).json({
      message: data.message,
      data: data.data
    });
    
  }

  async function httpGetBooking(req, res){

    const data = await getBooking(req.params.id);
    res.status(data.status).json({
      message: data.message,
      data: data.data
    });

  }

  async function httpGetBookings(req, res){

   const data = await getBookings();
    res.status(data.status).json({
      message: data.message,
      data: data.data
    });

  }

  async function httpUpdateBooking(req, res){

   const data = await updateBooking(req.params.id, req.body);
    res.status(data.status).json({
      message: data.message,
      data: data.data
    });

  }

  async function httpUnBookPlace(req, res){

   const data = await unBookPlace(req.params.id);
    res.status(data.status).json({
      message: data.message,
      data: data.data
    });

  }

  async function httpDeleteBooking(req, res){

   const data = await deleteBooking(req.params.id);
    res.status(data.status).json({
      message: data.message,
      data: data.data
    });

  }

  module.exports = ({
   httpGetBooking,
   httpGetBookings,
   httpSaveBooking,
   httpUpdateBooking,
   httpDeleteBooking,
   httpUnBookPlace
  })