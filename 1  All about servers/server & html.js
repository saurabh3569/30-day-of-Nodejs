const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    fs.readFile('index.html',(err,data)=>{
        if(err) throw err
        console.log('Success');
        res.end()
    })
}).listen(5000)