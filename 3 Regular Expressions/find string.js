// Finding specific text using regular expression
const fs = require('fs')
const fileName = 'data.txt'
const str = fs.readFileSync(fileName).toString()   //converted object to string 
const pattern = /own/gim   //g : global scope, i : case insensitive, m : multiline match
const myarray = str.match(pattern)
const len = myarray.length
console.log(len);