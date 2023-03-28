// Including the required modules
const zlib = require('zlib')
const fs = require('fs')

const unzip = zlib.createUnzip()

const read = fs.createReadStream('file.txt.gz')
const write = fs.createWriteStream('unzip.txt')
//Transform stream which is unzipping the zipped file
read.pipe(unzip).pipe(write)
console.log("unZipped Successfully");