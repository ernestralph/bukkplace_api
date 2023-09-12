const jwt = require('jsonwebtoken');
const User = require('../../models/schema/user.mongo.js');
const BlacklistedToken =  require('../../models/schema/blackListedToken.mongo.js');
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY

async function IsAuth(req, res, next) {
  const authHeader = req.headers['cookie']; 

  if (!authHeader) return res.sendStatus(401).json({ message: 'User not Authenticated!' });; 
  const cookie = authHeader.split('=')[1]; 

  const isBlacklisted = await BlacklistedToken.findOne({ token: cookie }); 
  if (isBlacklisted){
   return res
     .status(401)
     .json({ message: 'This session has expired.'});
  }
  jwt.verify(cookie, JWT_PRIVATE_KEY, async (err, decoded) => {
    if (err) {
      return res.sendStatus(403).json({ message: 'User not Authenticated!'});
    }

    const { id } = decoded; 
    const user = await User.findById(id); 
    const { password, ...data } = user._doc; 
    req.user = data;
    next();
  });
}

module.exports = ({
 IsAuth,
})