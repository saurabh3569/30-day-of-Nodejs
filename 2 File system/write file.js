// Writing the file Asynchronously :

const fs = require('fs')

const content = "this is new Content"

fs.writeFile('demo.txt',content,(err)=>{
    if(err) throw err
    else console.log('it\'s saved');
})