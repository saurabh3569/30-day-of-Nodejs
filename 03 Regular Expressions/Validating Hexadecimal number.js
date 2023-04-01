// Validating Hexadecimal number using regular expression 
const str = 'FFFFFF'
const pattern = /^[a-fA-F0-9]+$/g   
const res = str.match(pattern)
if(res) console.log('Valid Hexadecimal number');
else console.log("Not a valid Hexadecimal number");