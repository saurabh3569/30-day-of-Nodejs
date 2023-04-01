// console.time method is used to start a timer which can be used to compute the duration of the operation.
console.time('division');
var x = 10;
var y = 20;
var result = x/y;

if(result == 2){
    console.log("Result : %d",result)
}else{
    console.log("Result : " + result);
}
console.timeEnd('division');	