//Including the required modules
const crypto = require('crypto')
const fs = require('fs')

//Reading the Public Key
pubK = privK = fs.readFileSync('pub.key').toString();

//Passing the text to be encrypted using private key
let buf = Buffer.from('this is a secret key','utf-8')

//Encrypting the text
secretData = crypto.publicEncrypt(pubK, buf);
//printing the encrypted text
console.log(secretData.toString('utf8'));
//reading the Private key
privK = {
    key: fs.readFileSync('priv.key').toString(),
    passphrase: 'nodejsera'
}
//decrypting the text using public key
origData = crypto.privateDecrypt(privK, secretData)
//Printing the original content
console.log(origData.toString());