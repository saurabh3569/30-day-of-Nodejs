const http = require('http')

// create server
const server = http.createServer((req,res)=>{
    // change MIME type to 'text/plain'
    res.writeHead(200,{"Content-Type":"text/plain"})
    console.log('Server started');
    res.end('Working')
})

var host = '127.0.0.1'
var port = 3000

server.listen(port,(err)=>{
    if(err) return console.log(err);
    console.log('server is listening on ' + host + ':' + port);
})

