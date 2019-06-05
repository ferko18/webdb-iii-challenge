const express = require('express')
const server = express();
server.use(express.json())

server.get('/', (req, res) => {
    res.send(`<h1>hi there! </h1>`)
  })
  
  
  module.exports = server;