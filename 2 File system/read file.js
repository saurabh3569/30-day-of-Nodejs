// Reading the file Asynchronously :
const fs = require('fs')

fs.readFile('demo.txt',(err,data) => {
    if(err) throw err
    else console.log("content : " + data)
})



