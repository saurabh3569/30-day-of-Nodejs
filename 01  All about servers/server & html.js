const http = require('http')
const fs = require('fs')

// create server
http.createServer((req,res)=>{
    // change MIME type to 'text/html'
    res.writeHead(200,{"Content-Type":"text/html"})
    fs.readFile('index.html',(err,data)=>{
        if(err) throw err
        console.log('Success');
        res.end()
    })
}).listen(5000)