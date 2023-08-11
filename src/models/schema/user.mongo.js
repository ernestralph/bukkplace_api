const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
 {
  firstName:{
   type: String,
   required: true,
  },
  lastName:{
   type: String,
   required: true,
  },
  email:{
   type: String,
   required: true,
  },
  password:{
   type :String,
   minlength:[6,'password must be at least six characters'],
   maxlength:[15],
   required: true,
  }
 });

 module.exports = mongoose.model("User",userSchema);