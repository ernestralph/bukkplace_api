const mongoose = require('mongoose')

const placeSchema = mongoose.Schema({
 title:{
  type:String,
  required:[true,'title is Required'],
  unique : true
 },
 description:{
  type: String,
  maxlength:1024,
  minlength:5,
  default:'No Description',
  required:[true,"Description is Required"]
 },
 price:{
  type: Number,
  required:[true,"Price is Required"],
 },
 dateFrom:{
  type: Date,
  required:[true,"Date From Is Required"],
 },
 dateTo:{
  type: Date,
  required:[true,"Date To Is Required"],
 },
 location:{
  type: {
   address: String,
   staticMapImageUrl: String
  },
  required: [true,"Location is Required"],
 },
 imageUrl:{
  type: String,
  default:"https://res.cloudinary.com/dxfq3iotg/image/",
  required:false
 }
});

module.exports  = mongoose.model("Place",placeSchema);