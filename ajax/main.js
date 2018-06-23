const http = require('http');
const fs = require('fs');
const indexFile = fs.createReadStream('./index.html')


// 创建一个web 服务器
const server = http.createServer((req,res)=>{
    
    console.log('那个家伙又来了')
    res.end('hello world')
})

server.listen(8082)