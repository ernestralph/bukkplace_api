const userSchema = require('./schema/user.mongo');

async function createUser(user){
 const newUser = await userSchema.updateOne({
  email: user.email
 }, 
 {
  firstName: user.firstName,
  lastName: user.lastName,
  email:user.email,
  password: user.password
 },
 {upsert:true}
 );

 return newUser;
}

module.exports = ({
 createUser,
});