const { error } = require('console');
const {bookingSchema} = require('./schema/booking.mongo');
const {placeSchema} = require('./schema/place.mongo');

async function saveBooking(booking){
 const bookedPlace = placeSchema.findOne({_id: booking.placeId});
 if(!bookedPlace.isBooked){
  const data = await bookingSchema.create(
   booking,
   {ordered: true}
  );
  bookedPlace.isBooked = true;
  await bookedPlace.save();
  return data;
 }else{
   throw new Error('This Place is already Booked');
 }
}

async function getBookings(){
 return await bookingSchema.find();
}

async function getBooking(id){
 return await bookingSchema.findById(id);
}

async function updateBooking(id, newBooking){
 return await bookingSchema.findByIdAndUpdate(id, newBooking);
}

async function deleteBooking(id){
  const deletedBooking = await bookingSchema.findByIdAndDelete(id);
  if(deletedBooking){
   const bookedPlace = placeSchema.findOne({_id: deletedBooking.placeId});
   bookedPlace.isBooked = false;
   await bookedPlace.save();
   return bookedPlace;
  }else{
   throw new error("Booking is already deleted!")
  }
}
module.exports= ({
 saveBooking,
 getBookings,
 getBooking,
 updateBooking,
 deleteBooking,
});