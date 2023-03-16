const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{

    res.writeHead(200,{"Content-Type":"video/mp4"})

    fs.exists('video.mp4', function(exists){
        if(exists){
            const rstream = fs.createReadStream('video.mp4')
            rstream.pipe(res)
        }else{
            res.end('404 Error')
        }
    })

}).listen(5000)