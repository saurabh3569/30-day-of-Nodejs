const buff1 = Buffer.from("saurabh")
const buff2 = Buffer.from("saurabh")
const buff3 = Buffer.from("mishra")

console.log(buff1.equals(buff2));  // true
console.log(buff1.equals(buff3));  // false