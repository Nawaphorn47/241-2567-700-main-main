
const http = require('http');

const hostname = 'localhost';
const port = 8000;

const requestListener = function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // เพิ่ม Content-Type
    res.end("My first server!");
}

const server = http.createServer(requestListener);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
