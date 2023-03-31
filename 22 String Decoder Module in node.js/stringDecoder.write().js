const stringDecoder  = require('string_decoder').StringDecoder
const sd = new stringDecoder('utf8')
const buff = Buffer.from("saurabh")  
console.log(buff);    // <Buffer 73 61 75 72 61 62 68></Buffer>
console.log(sd.write(buff));  // saurabh