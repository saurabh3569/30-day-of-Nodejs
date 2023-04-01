// Validating emails using regular expression
const str = 'info@gmail.com'
const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const res = str.match(pattern)
if (res) console.log('Valid Email Address');
else console.log('Invalid Email Address');