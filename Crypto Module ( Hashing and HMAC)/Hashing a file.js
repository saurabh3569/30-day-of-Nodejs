//Loading the required modules in node.js
const crypto = require('crypto')
const fs = require('fs')

//Algorithm to be used for HASH
const algorithm = 'sha256'
//creating hash object
const hash = crypto.createHash(algorithm)

// reading the content of the file
const fileName = 'data.txt'
const fileData = fs.ReadStream(fileName)

//passing the data to be hashed
fileData.on('data',function(data){
    hash.update(data)
})

//Creating the hash in the required format and writing it in file
fileData.on('end',function(){
    const gen_hash = hash.digest('hex')
    console.log('Hash generated using ' + algorithm + ' \nHashed output is :  ' + gen_hash + ' \nFile name is :  ' + fileName);
    fs.writeFileSync(fileName,gen_hash)
})