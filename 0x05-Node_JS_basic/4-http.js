#!/usr/bin/node
const http = require('http');

// PORT
const PORT = 1245;

const app = http.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
});

// server listen port
app.listen(PORT);

console.log(`Server is running on PORT: ${PORT}`);
