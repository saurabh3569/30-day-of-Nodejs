// find method returns the first value in the array which passes a test provided as a function. If no element matches the condition , it will return undefined 
arr = [2,4,6,8,10];
arr1 = [2,3,4,7,8];
function odd(value){
    if( (value % 2) == 1){
        return true;
    }else{
        return false;
    }
}

var out = arr.find(odd);
var out1 = arr1.find(odd);
console.log("Output of array 1 : " + out);   //Output of array 1 : undefined
console.log("Output of array 2 :" + out1);	 //Output of array 2 :3			
								  