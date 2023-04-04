const os = require('os');
const value =  os.freemem(); // return amount of free system memory in bytes
console.log(value);