const http = require('http');

const server = http.createServer((req, res) => {
    res.end('volà la premiere rep du server !');
});

server.listen( process.env.PORT || 3002 );