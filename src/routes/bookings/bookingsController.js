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
        return res.status(200).json({"data":booking})
      }else{
        return res.status(404).json({"error":"booking cannot be found!"})
      }
      
    } catch (error) {
       return res.status(500).json({"error":"Error getting Booking!"});
    }
  }

  async function httpGetBookings(req, res){
   try {
      const bookings = await getBookings();
      if(bookings.length <= 0){
        return res.status(404).json({"error":"no booking record found!"})
      }else{
        return res.status(200).json({
          data: bookings,
        });
      }
      
    } catch (error) {
       return res.status(500).json({"error":"Error getting Booking Collection!"});
    }
  }

  async function httpSaveBooking(req, res){
   try {
    const savedBooking = saveBooking(req.body);
    res.status(200).json({
      data: savedBooking
    });
   } catch (error) {
    return res.status(500).json({"error": "Error saving booking!"});
   }
  }

  async function httpUpdateBooking(req, res){
   try {
    const updatedPlace = await updateBooking(req.query.id, req.body)
    return res.status(200).json({
      message:"updated successfully",
      data : updatedPlace,
    });
   } catch (error) {
    return res.status(500).json({
      "error":"Error updating bokking"
    });
   }
  }

  async function httpDeleteBooking(req, res){
   try {
      const booking = await deleteBooking(req.query.id);
      if(booking){
        return res.status(200).json({
          message:"deleted successfully",
          data: booking,
        })
      }else{
        return res.status(404).json({"error":"Booking cannot be found!"})
      }
      
    } catch (error) {
       return res.status(500).json({"error":"Error deleting booking!"})
    }
  }

  module.exports = ({
   httpGetBooking,
   httpGetBookings,
   httpSaveBooking,
   httpUpdateBooking,
   httpDeleteBooking
  })