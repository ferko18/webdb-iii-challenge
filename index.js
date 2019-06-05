const server = require('./server');

const port = 4444

server.listen(port, () => {
  console.log(`\nServer Running on port:${port}`)
})