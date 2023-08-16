const userSchema = require('./schema/user.mongo');

async function createUser(user){

 try {
  const newUser = await userSchema.findOneAndUpdate({
   email: user.email
  }, 
  {
   firstName: user.firstName,
   lastName: user.lastName,
   email:user.email,
   password: user.password
  },
  {
   new: true,
   upsert:true
  }
  );

  return newUser;
  
 } catch (error) {
  
 }

 return newUser;
}

module.exports = ({
 createUser,
});