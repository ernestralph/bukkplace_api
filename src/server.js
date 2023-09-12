require('dotenv').config()
const app = require('./app');
const http = require('http');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const MONGO_URL = `mongodb+srv://bukkplace:${process.env.MONGO_DB_PWD}@bukkcluster.g74uxzl.mongodb.net/bukk_db?retryWrites=true&w=majority`;

mongoose.promise = global.Promise;
mongoose.set('strict', false);
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err));

async function startServer(){


 server.listen(
  PORT, 
  ()=>{
  console.log(`Listening... on port ${PORT}`)
 })
}

startServer()