// Renaming the file Asynchronously
const fs = require('fs')
fs.rename('demo.txt','newDemo.txt',(err)=>{
    if(err) throw err
    console.log('File renamed successfully');
})