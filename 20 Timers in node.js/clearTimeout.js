const hello = () => {
    console.log('hello');
}
const tim = setTimeout(hello,2000)
clearTimeout(tim) //It will stop to print data delay of 2000ms