const { model } = require("mongoose")


function createUser(req, res){
 console.log(req.body);
 console.log(req, 'user created')
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
 createUser,
 login,
 logout
})