// Read a File in Nodejs

const fs = require('fs')

// Reading the file Asynchronously :
fs.readFile('demo.txt',(err,data) => {
    if(err) throw err
    else console.log("content : " + data)
})



