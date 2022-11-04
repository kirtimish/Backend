const fs = require('fs');

 const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        fs.readFile('message.txt',{encoding: 'utf-8'}, (err,data) => {
            if(err){
                console.log(err);
            } else {
                //console.log(data);
                res.setHeader('Content-Type', 'text/html');
                res.write('<html>');
                res.write('<head><title> my first web page</title></head>');
                res.write(`<body>${data}</body>`)
                res.write(`<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
                res.write('</html>')
                return res.end();
            }
        });
    } 
    else if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',() => {
            const parentBody = Buffer.concat(body).toString();
            const msg = parentBody.split('=')[0];
            fs.writeFile('message.txt',msg, err => {
                res.statusCode = 302;
                res.setHeader('location', '/');
                return res.end();
            });
        });
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> my first web page</title></head>')
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>')
        res.end();
    }
 }

 module.exports = requestHandler;

//  module.exports = {
//     handler: requestHandler,
//     someText : 'Some hard coded text here',
//  }

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text here';

// exports.handler = requestHandler;
// exports.someText = 'Some hard coded text here';