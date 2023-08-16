const express = require('express');
const {
 signup, 
 login, 
 logout
} = require('./authController');


const authRouter = express.Router();

authRouter.post('/signin', login);
authRouter.post('/signout', logout);
authRouter.post('/signup', signup);

module.exports= authRouter;