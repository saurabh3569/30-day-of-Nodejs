const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.write('Hello World !')
    res.end()
})

server.listen(5000,()=>{
    console.log('started');
})


// response.write()  -- can send multiple response
// res.end() -- can send only one response