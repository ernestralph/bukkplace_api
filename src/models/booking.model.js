const { error } = require('console');
const Booking = require('./schema/booking.mongo');
const Place = require('./schema/place.mongo');
const User = require('./schema/user.mongo');

async function saveBooking(booking){
  try {
  const user = await User.findById(booking.userId);
  const bookedPlace = await Place.findById(booking.placeId);

  if(!user) return {status: 403, data:[], message:"Invalid user!"};
  if(bookedPlace.isBooked === true) return {status: 403, data:[], message:"Place is already booked!"};

  const newBooking = new Booking(booking);
  const bookingData = await newBooking.save();

  bookedPlace.isBooked = true;
  await bookedPlace.save();

  if(bookingData){
   return{
    status: 200,
    data:[bookingData],
    message:'New booking created successfully!'
   }
  }

 } catch (error) {

  return{
    status: 500,
    data:[],
    message:'Internal server error!'
   }

  }
}

async function getBookings(){
 try {
  const bookings = await Booking.find();
  if(!bookings.length){
    return{
    status: 404,
    data:[],
    message:'No Records found!'
   }};

  return{
    status: 200,
    data: bookings,
    message:'Records fetched successfully!'
   }

 } catch (error) {

  return{
    status: 500,
    data:[],
    message:'Internal server error!'
   }

 }
}

async function getBooking(id){
 try {
  const booking = await Booking.findById(id);
  if(!booking){
    return {
        status: 404,
        data:[],
        message:'Record not found!'
   }
  }

  return{
    status: 200,
    data:[booking],
    message:'Record fetched successfully!'
  }
 } catch (error) {

  return{
    status: 500,
    data:[],
    message:'Internal server error!'
   }

 }
}

async function updateBooking(id, bookingObj){
 try {

   const booking = await Booking.findById(id);
   if (!booking){
     return {
       status: 404,
       data:[],
       message:'Record not found!'
      }
    }
    
    const updatedBooking = await Booking.findByIdAndUpdate(id, {...bookingObj}, {returnDocument:'after'});
    return{
      status: 200,
      data:[updatedBooking],
      message:'Record updated successfully!'
    }

  } catch (error) {

  return {
     status: 500,
     data:[],
     message:'Internal server error!'
    }

 }
}

async function unBookPlace(id){
 try {

  const booking = await Booking.findById(id);
  if (!booking){
    return {
      status: 404,
      data:[],
      message:'Record not found!'
    }
  }

  const place = await Place.findById(booking.placeId);
  place.isBooked = false;
  const unBookedPlace = await place.save();

   return{
    status: 200,
    data:[unBookedPlace],
    message:'Record updated successfully!'
  }

 } catch (error) {

  return {
     status: 500,
     data:[],
     message:'Internal server error!'
    }

 }
}

async function deleteBooking(id){
  
  try {
    const booking = await Booking.findById(id);
    if (!booking ){
      return {
        status: 404,
        data:[],
        message:'Record not found!'
      }
    }

    const bookedPlace = await Place.findById(booking.placeId);
    await Booking.findByIdAndDelete(id);
    bookedPlace.isBooked = false;
    await bookedPlace.save();

   return{
    status: 201,
    data:[],
    message:'Record deleted successfully!'
  }

 } catch (error) {

  return {
     status: 500,
     data:[],
     message:'Internal server error!'
    }
    
 }
}


module.exports= ({
 saveBooking,
 getBookings,
 getBooking,
 updateBooking,
 deleteBooking,
 unBookPlace,
});