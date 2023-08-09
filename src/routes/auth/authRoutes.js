const express = require('express');
const {createUser, login, logout} = require('./authController');


const authRouter = express.Router();

authRouter.post('/signin', login);
authRouter.post('/signout', logout);
authRouter.post('/signup', createUser);

module.exports= authRouter;