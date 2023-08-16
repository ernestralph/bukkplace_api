const {bookingSchema} = require('./schema/booking.mongo')
const {placeSchema} = require('./schema/place.mongo')

async function saveBooking(booking){
 try {

  const bookedPlace = placeSchema.findOne({_id: booking.placeId})
  if(!bookedPlace.isBooked){
   const data = await bookingSchema.updateOne(
    {_id : booking._id},
    booking,
    {upsert: true}
   );
   bookedPlace.isBooked = true;
   await bookedPlace.save();

   return data;
  }else{
    throw new Error('This Place is already Booked');
  }

 } catch (error) {
  return error;
 }
}

async function getBookings(){
 return await bookingSchema.find();
}

async function getBooking(id){
 return await bookingSchema.findOne({
  _id: id
 });
}

async function updateBooking(id, newBooking){
 return await bookingSchema.findByIdAndUpdate(id, newBooking);
}

async function deleteBooking(id){
 return await bookingSchema.findByIdAndUpdate(id);
}
module.exports= ({
 saveBooking,
 getBookings,
 getBooking,
 updateBooking,
 deleteBooking,
});