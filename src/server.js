const app = require('./app');
const http = require('http');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const MONGO_URL = "mongodb+srv://bukkplace:Bj2mD2FMQ8rlCCPz@bukkcluster.g74uxzl.mongodb.net/bukk_db?retryWrites=true&w=majority";


mongoose.connection.once('open', ()=>{
 console.log("Connected to mongo")
});

mongoose.connection.on('error', (err)=>{
 console.error(err)
});

async function startServer(){
 await mongoose.connect(MONGO_URL)

 server.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT} `)
 })
}

startServer()