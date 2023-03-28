// Including the required modules
const zlib = require('zlib');
const fs = require('fs');

const zip = zlib.createGzip()

const read = fs.createReadStream('file.txt')   
const write = fs.createWriteStream('file.txt.gz')
//Transform stream which is zipping the input file
read.pipe(zip).pipe(write)
console.log('Zipped Successfully');