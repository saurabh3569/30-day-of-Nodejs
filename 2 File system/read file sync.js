// Read a File in Nodejs

const fs = require('fs')

// Reading the file Synchronously :

let fileName = 'demo.txt'
let content = fs.readFileSync(fileName)
console.log('Content : ' + content);