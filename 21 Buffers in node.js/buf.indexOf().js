// This method is used to check whether the buffer contains a specified value. 
const buff = Buffer.from("saurabh")
console.log(buff.indexOf("a"));  //  1
console.log(buff.indexOf("z"));  // -1