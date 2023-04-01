const http = require('http')
const fs = require('fs')

// create server
http.createServer((req,res)=>{
    // change MIME type to 'audio/mp3'
    res.writeHead(200,{"Content-Type":"audio/mp3"})

    fs.exists('audio.mp3',function(exists){
        if(exists){
            const rstream = fs.createReadStream('audio.mp3')
            rstream.pipe(res)
        }else{
            res.end("Error 404")
        }
    })
}).listen(5000)
