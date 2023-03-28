// require fs module for file system
const fs = require('fs')
// write data to a file using writeable stream
const writeContent = 'hello, how are you ?'

const writeStream = fs.createWriteStream('write.txt')
// write data
writeStream.write(writeContent)
// done writing
writeStream.end()
// write handler for error event 
writeStream.on('error', (err) => {
    console.log(err);
})

writeStream.on('finish', () => {
    console.log('Data written successfully using stream')
    // Now trying to read the stream
    const readStream = fs.createReadStream('read.txt')
    let readContent = ''  // to hold the read contents
    readStream.on('data', (chunk) => {
        readContent += chunk
    })
    readStream.on('error', (err) => {
        console.log(err);
    })
    readStream.on('end', () => {
        console.log('read : ' + readContent);
    })
    console.log('performed write and read using streams');
})