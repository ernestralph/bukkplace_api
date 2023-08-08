const { model } = require("mongoose")


function createUser(req, res){
 console.log(req, 'user created')
}
function login(req, res){
 console.log(req, 'user logged in')
}
function logout(req, res){
 console.log(req, 'user logged out')
}

module.exports = ({
 createUser,
 login,
 logout
})