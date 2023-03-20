// new Error(message) : It is used to create a new error object. 
const err = new Error('This is an error message');
console.log(err);
// error.message : It shows the description of the error.
console.log(err.message);

// error.code : This is a string label which is used to identify the type of error. 
// error.stack : It returns a string in which details are provided about where in the code the error was instantiated.
// Error.captureStackTrace : This is used to create a .stack property on the target object which returns the location in the code where Error. 
// Error.stackTraceLimit : This property specifies number of stack frames captured by stack trace. 