const fs = require('fs')
const date1 = new Date()
const time_start = date1.getTime()
console.log("starting at : " + time_start);   // this will be printed first
console.log("Let's start reading file");   // this will be printed second

const fileName = 'output.txt'

fs.readFile(fileName,(err,data)=>{
    if(err) throw err
    console.log('Content : ' + data);  // this will be printed sixth
})

//For calculating execution time
const date2 = new Date();
const time_end = date2.getTime();
console.log("{Check point 2} finishing at:  " + time_end);  // this will be printed third
const execution_time = time_end - time_start;
console.log("Time for execution: " + execution_time );  // this will be printed fourth
//Consider it some another task in queue
console.log('Another task to be executed');   // this will be printed fifth