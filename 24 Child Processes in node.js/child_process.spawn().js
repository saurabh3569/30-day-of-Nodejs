// Import the child_process module
const cp = require('child_process');
 
for(let i = 1; i<6; i++) {
   var worker = cp.spawn('node', ['slave.js', i]);

   worker.stdout.on('data', function (data) {
      // Log the stdout output
      console.log('Value of Stdout : ' + data);
   });

   worker.stderr.on('data', function (data) {
      // Log the stderr output 
      console.log('stderr: ' + data);
   });

   worker.on('close', function (code) {
      console.log(`child process exited with code ${code}`);
   });
}
												
