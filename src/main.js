const http = require('http');

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Under construction, Contact gordon_hj@naver.com, https://github.com/gordon-hj');
    console.log('Request IP: %s',  req.headers['x-forwarded-for'] ||  req.socket.remoteAddress);
}).listen(80, "0.0.0.0");

console.log('Server running on port 80');