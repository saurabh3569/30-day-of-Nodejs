 //Loading the crypto module in node.js
 const crypto = require('crypto');
 //creating hash object 
 const hash = crypto.createHash('md5');
 //passing the data to be hashed
 data = hash.update('nodejsera', 'utf-8');
 //Creating the hash in the required format
 gen_hash= data.digest('hex');
 //Printing the output on the console
 console.log("hash : " + gen_hash);