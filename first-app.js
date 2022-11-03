// const fs = require('fs');

// fs.writeFileSync('hello.txt','hello from hello txt');
const http = require('http');

const server = http.createServer((req,res) => {
    console.log('Kirti');
})

server.listen('4000');