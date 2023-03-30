const hello = () => {
    console.log('hello');
}
const imm = setImmediate(hello);
clearImmediate(imm);  //It will stop to print data immediately