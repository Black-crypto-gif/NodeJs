// Creat a server to handle http request :
const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) => {
 console.log(req.url, req.method);

 // set header content type : 

 res.setHeader('Content-Type', 'text/html');

 // where the user came from :

 let path = './views/';
 switch (req.url) {
     case '/':
         path += './index.html';
         res.statusCode = 200;
         break;
     case '/about':
         path += './about.html';
         res.statusCode = 200;
         break;
     case '/redirect':
         path += './redir.html';
         res.statusCode = 200;
         break;
     case '/about-me':
         res.statusCode = 301;
         res.setHeader('Location','/about');
         res.end();
         break;
     default:
         path += './404.html';
         res.statusCode = 404;
         break;
 }

// send HTML FILES :

fs.readFile(path, (err, data) => {
    if (err) {
        console.log(err);
        res.end();
    }else{
        
        res.write(data);
        res.end()
    }
});

 
    
});

server.listen(3000, 'localhost', () => {
    console.log('Server listening on port 3000');
    
})          