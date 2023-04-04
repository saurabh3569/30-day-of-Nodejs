const os = require('os');
const value =  os.endianness();  // return endianness of the CPU
console.log(value);