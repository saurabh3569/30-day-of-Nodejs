// This method is used to copy specified amount of bytes from source buffer to target buffer.
const buff = Buffer.from("saurabh")
const newBuff1 = Buffer.alloc(20)
const newBuff2 = Buffer.alloc(2)
buff.copy(newBuff1)
buff.copy(newBuff2)

console.log(newBuff1 + "");  //saurabh
console.log(newBuff2 + "");  //sa