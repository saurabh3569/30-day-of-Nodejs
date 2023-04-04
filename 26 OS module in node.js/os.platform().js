const os = require('os')
const value = os.platform() // return operating system platform as set during compile time of node.js
console.log(value);