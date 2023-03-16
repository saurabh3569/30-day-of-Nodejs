// Deleting the file Asynchronously 
const fs = require('fs')
fs.unlink('demo.txt',(err)=>{
    if(err) throw err
    console.log('file deleted successfully');
})