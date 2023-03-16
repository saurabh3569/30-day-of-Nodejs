const http = require('http')

// create server
http.createServer((req,res)=>{
    // change MIME type to 'application/json'
    res.writeHead(200,{"Content-Type":"application/json"})
    let res_json = {
        name : "saurabh",
        age : 220
    }
    res.end(JSON.stringify(res_json))
}).listen(5000)