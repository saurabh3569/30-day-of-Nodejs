// Appending the file synchronously 
const fs = require('fs')
const newData = "Appending the file synchronously"
fs.appendFileSync('demo.txt',newData)
console.log('Successfully Appended');