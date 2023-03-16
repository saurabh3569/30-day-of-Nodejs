const http = require('http')
const { stringify } = require('querystring')

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"})
    let res_json = {
        name : "saurabh",
        age : 220
    }
    res.end(JSON.stringify(res_json))
}).listen(5000)