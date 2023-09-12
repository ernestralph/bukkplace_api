const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

const userSchema = mongoose.Schema(
 {
  firstName:{
   type: String,
   required: [true, 'first name is required'],
  },
  lastName:{
   type: String,
   required: true,
  },
  email:{
   type: String,
   required: true,
   lowercase: true,
   trim: true,
  },
  password:{
   type :String,
   required: true,
   select: true
  }
 },
 {timestamps: true}
 );

 userSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.generateAccessJWT = function () {
  let payload = {
    id: this._id,
  };
  return jwt.sign(payload, JWT_PRIVATE_KEY, {
    expiresIn: '20m',
  });
};


 module.exports = mongoose.model("User", userSchema);