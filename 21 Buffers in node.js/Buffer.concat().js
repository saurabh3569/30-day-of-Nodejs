// This method is used to concatenate two or more buffers together.
const buff1 = Buffer.from("saurabh")
const buff2 = Buffer.from(" mishra")
const op = Buffer.concat([buff1,buff2])
console.log(buff1);  // <Buffer 73 61 75 72 61 62 68>
console.log(buff2);  //<Buffer 20 6d 69 73 68 72 61>
console.log(op);     //<Buffer 73 61 75 72 61 62 68 20 6d 69 73 68 72 61>
console.log(op+"");  // saurabh mishra