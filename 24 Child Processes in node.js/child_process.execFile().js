// Import the child_process module
const ef = require('child_process').execFile;

var child = ef('node', ['--version']);

child.stdout.on('data', function (data) {
    // Log the stdout output 
    console.log('stdout ' + data);
})

child.stderr.on('data', function (data) {
    // Log the stderr output 
    console.log('stderr ' + data);
})

child.on('close', function (code) {
    console.log(`child process exited with code ${code}`);
})


// another way to write
ef('node', ['--version'], (error, stdout, stderr) => {
    if (error) {
        console.log(error);
        return
    }
    // Log the stdout output
    console.log(`stdout: ${stdout}`);
    if(stderr) console.log(`stderr: ${stderr}`);
})