
const {createUser, login} = require("../../models/auth.model");
const { model } = require("mongoose");
const BlacklistedToken =  require('../../models/schema/blackListedToken.mongo.js');


async function signUp(req, res){
const {data, status, message} = await createUser(req.body);
return res.status(status).json({
message: message,
data: data
});
}

async function signIn(req, res){
    const {data, status, message, token} = await login(req.body);

    let options = {
      maxAge: 20 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: 'None',
    };

    res.cookie('SessionID', token, options);
    return res.status(status).json({
        message: message,
        data: data
        });
}



 async function signOut(req, res) {
  try {
    const authHeader = req.headers['cookie']; 
    if (!authHeader) return res.sendStatus(204); 
    const cookie = authHeader.split('=')[1]; 
    const accessToken = cookie.split(';')[0];
    const isBlacklisted = await BlacklistedToken.findOne({ token: accessToken }); 

    if (isBlacklisted) return res.sendStatus(204);
    const newBlacklist = new BlacklistedToken({
      token: accessToken,
    });
    
    await newBlacklist.save();
    res.setHeader('Clear-Site-Data', '"cookies", "storage"');
    res.status(200).json({ message: 'You are logged out!' });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
  res.end();
}

module.exports = ({
signUp,
signIn,
signOut
})