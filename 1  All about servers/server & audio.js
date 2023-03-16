const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"audio/mp3"})

    fs.exists('audio.mp3',function(exists){
        if(exists){
            const rstream = fs.createReadStream('audio.mmp3')
            rstream.pipe(res)
        }else{
            res.end("Error 404")
        }
    })
}).listen(5000)
