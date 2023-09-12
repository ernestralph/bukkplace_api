const express = require('express');
const Validate = require('../../middleware/auth-middleware/validate');
const IsAuth = require('../../middleware/auth-middleware/checkAuth');
const {check} = require('express-validator')

const {
 signUp, 
 signIn, 
 signOut
} = require('./authController');


const authRouter = express.Router();

authRouter.post('/signup',
  check('email')
    .isEmail()
    .withMessage('Enter a valid email address')
    .normalizeEmail(),
  check('firstName')
    .not()
    .isEmpty()
    .withMessage('You first name is required')
    .trim()
    .escape(),
  check('lastName')
    .not()
    .isEmpty()
    .withMessage('You last name is required')
    .trim()
    .escape(),
  check('password')
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage('Must be at least 8 chars long'),
  Validate, 
  signUp
 );
authRouter.post('/signin',
  check('email')
   .isEmail()
   .withMessage('Enter a valid email address')
   .normalizeEmail(),
  check('password')
   .not()
   .isEmpty(),
  Validate,
  signIn
 );
authRouter.post('/signout', signOut);

module.exports= authRouter;