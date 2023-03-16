const http = require('http')
const fs = require('fs')

// create server
http.createServer((req, res) => {
    // change MIME type to 'application/pdf'
    res.writeHead(200, { "Content-Type": "application/pdf" })

    fs.readFile('sample.pdf', (err, data) => {
        if (err) return console.log(err);
        res.write(data)
        res.end()
    })

}).listen(5000)