const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
 placeId: {
  type: String,
  required : true,
 },
 userId:{
  type: String,
  required :true
 },
 placeTitle:{
  type: String,
  required: true
 },
 placeImage:{
  type:String,
  required: true
 },
 firstName:{
  type: String,
  required: true,
 },
 lastName:{
  type: String,
  required: true
 },
 guestNumber:{
  type: Number,
  required: true,
  minlength:[1,'Please enter a valid value'],
  maxlength:[5,"Guests can't exceed more than 5 people"]
 },
 bookedFrom:{
  type:Date,
  required: true,
 },
 bookedTo:{
  type:Date,
  required: true,
 }
},
{timestamps:true});

module.exports = mongoose.model('Booking', bookingSchema)