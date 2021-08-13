// Creat a server to handle http request :
const http = require('http');

const server = http.createServer( (req, res) => {
 console.log(req.url, req.method, req.headers);
    
});

server.listen(3000, 'localhost', () => {
    console.log('Server listening on port 3000');
    
})          