// Writing the file synchronously 
const fs = require('fs')

const content = 'text Updated'

fs.writeFileSync('demo.txt',content)
console.log('it\'s saved');