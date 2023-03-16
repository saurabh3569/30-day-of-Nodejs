// //Writing a File Asynchronously using nodejs
const fs = require('fs')
const newData = 'appending file'
fs.appendFile('demo.txt',newData,(err)=>{
    if(err) throw err
    console.log('The content appended successfully');
})