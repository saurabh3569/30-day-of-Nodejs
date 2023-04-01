// Reading the file Synchronously :
const fs = require('fs')

let fileName = 'demo.txt'
let content = fs.readFileSync(fileName)
console.log('Content : ' + content);