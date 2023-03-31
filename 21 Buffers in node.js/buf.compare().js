// This method is used to compare buffers. It returns
// 0 : If both buffers are same
// 1 : If target buffer comes before the source buffer.
// -1 : If source buffer comes before the target buffer.

const buff1 = Buffer.from("saurabh")
const buff2 = Buffer.from("saurabh")
const output = buff1.compare(buff2) // return 0 because both are equal

console.log(output);  