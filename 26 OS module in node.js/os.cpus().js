const os = require('os')
const value = os.cpus() //information of all the CPU/Core
console.log(JSON.stringify(value)); 