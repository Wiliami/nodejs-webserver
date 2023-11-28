const http = require('node:http');
const readFiles = require('./readFiles');
const sum = require('./sum');
const appendFiles = require('./writeFiles');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

readFiles();
// writeFiles();
appendFiles();
console.log(sum(1,1));


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});