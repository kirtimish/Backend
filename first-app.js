// const fs = require('fs');

// fs.writeFileSync('hello.txt','hello from hello txt');
const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/home'){
        console.log(req.url, req.method, req.headers);
        // process.exit();
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> my first web page</title></head>')
        res.write('<body><h1>Welcome to Home</h1></body>');
        res.write('</html>')
        res.end();
    } else if(req.url === '/about'){
        console.log(req.url, req.method, req.headers);
        // process.exit();
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> my first web page</title></head>')
        res.write('<body><h1>Welcome to my About us page</h1></body>');
        res.write('</html>')
        res.end();
    } else{
        console.log(req.url, req.method, req.headers);
        // process.exit();
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> my first web page</title></head>')
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>')
        res.end();
    }
})

server.listen('4000');