// Renaming the file synchronously
const fs = require('fs')
fs.renameSync('demo.txt','newDemo.txt')
console.log('file renamed successfully');