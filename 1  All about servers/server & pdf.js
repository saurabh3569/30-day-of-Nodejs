const http = require('http')
const fs = require('fs')

http.createServer((req,res) => {

    res.writeHead(200,{"Content-Type":"application/pdf"})

    fs.readFile('sample.pdf',(err,data)=>{
        if(err) return console.log(err);
        res.write(data)
        res.end()
    })

}).listen(5000)