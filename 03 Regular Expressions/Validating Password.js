// Validating Password using regular expression
// Password must contain 1 capital letter [A-Z]
// Password must contain 1 small letter [a-z]
// Password must contain 1 number [0-9]
// Password must contain 1 special character [!,@,#,$,%,^,. . . ] etc
// Length of the password must be within the range [6 to 16]

const str  = 'Aa6@aa'
const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,10}$/
const res = str.match(pattern)
if(res) console.log('valid Password');
else console.log('Invalid Password');