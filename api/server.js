const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');
const cors = require('cors')

const server = express();
const session = require('express-session')




server.get('/', (req, res) => {
  res.status(200).json({message: 'server is working'})
});

async function logger(req, res, next) {
  console.log(`${req.method} was requested at ${req.url} on [${new Date().toISOString()}]`)
  next();
};



module.exports = server;