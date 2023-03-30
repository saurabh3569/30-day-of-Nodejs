const hello = () => {
    console.log('hello');
}
const s_int = setInterval(hello);
clearInterval(s_int); //It will stop to print data recursively