let crypto = require('crypto')
let algorithm = 'aes-256-ctr',password = 'RJ23edrf';
//Here "aes-256-cbc" is the advance encryption standard we are using for encryption.
//Text is the Confidential data which we need to encrypt using 'password'(Key).

function encrypt(text){
    let cipher = crypto.createCipher(algorithm,password)
    let crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}

//Here "aes-256-cbc" is the advance encryption standard we used for encryption.
//Text is the Cipher which we need to decrypt using 'password'(Key).
function decrypt(text){
   let decipher = crypto.createDecipher(algorithm,password)
   let dec = decipher.update(text,'hex','utf8')
   dec += decipher.final('utf8');
   return dec;
}

//Actual content
let text = "Nodejsera for all web development languages";
//Calling the encrypt function and printing the encrypted content				
let e = encrypt(text);
console.log(e);
//calling the decrypt function and printing the decrypted content
let d = decrypt(e);
console.log(d);	