// Note : It will not change the original array.
// slice(start,end)
arr = [ 5 , 2 , 8 , 5 , 6 ];
arr1 = ['a','b','c','d'];
console.log(arr);   //[ 5, 2, 8, 5, 6 ]
console.log(arr1);  //[ 'a', 'b', 'c', 'd' ]
var str = arr.slice(2,4);
var str1 = arr1.slice(-2,-1);
console.log(str);    //[ 8, 5 ]
console.log(str1);   //[ 'c' ]