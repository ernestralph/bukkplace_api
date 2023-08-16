const { model } = require("mongoose")
const {createUser} = require("../../models/auth.model")


async function signup(req, res){
        const newUser = await createUser(req.body);
        return res.status(200).json(newUser);
}

function login(req, res){
 return res.status(200).json({
         'user':'ayodele'
        })
}

function logout(req, res){
 console.log(req.body);
  return res.status(200).json({
         'user':'ayodele'
        })
}

module.exports = ({
signup,
login,
logout
})