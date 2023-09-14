const User = require('./schema/user.mongo');
const bcrypt = require('bcrypt');


async function createUser(user){

 try {
  if (await User.findOne({email: user.email})) {
   return {
    message:"User already exist!",
    data:[], 
    status: 400,
   }}

  const newUser = new User({
   firstName: user.firstName,
   lastName: user.lastName,
   email:user.email,
   password: user.password
  });

 const savedUser = await newUser.save(); 
 const { password, role, ...user_data } = savedUser._doc;

 return{
  status: 200,
  data: user_data,
  message:'Thank you for registering with us. Your account has been successfully created.',
 }
  
 } catch (error) {
  return {message: 'Internal server error', status: 500};
 }
}

async function login(userObj){
 const {email} = userObj;
 try {

    const user = await User.findOne({ email }).select('+password');
    if(!user){return {data:[], message:"Auth Failed", status: 401}}

    const isPasswordValid = bcrypt.compare(userObj.password, user.password);
     
    if(!isPasswordValid){ return {data:[], message:"Auth Failed", status: 401}}
    
    const { password, ...user_data } = user._doc;

    const token = user.generateAccessJWT();
     return {
      data: [user_data],
      message:"Authenticated Successfull",
      status: 200,
      token : token,
     }

   } catch (error) {

     return {
      data: [],
      message:"Internal Server Error!",
      status: 500
     }  
     
   }
}

module.exports = ({
 createUser,
 login
});