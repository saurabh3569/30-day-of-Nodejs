// This method is used to fill the buffer with a specified value.
const buff = Buffer.allocUnsafe(10).fill("s")
console.log(buff);     // <Buffer 73 73 73 73 73 73 73 73 73 73>
console.log(buff+"");  // ssssssssss