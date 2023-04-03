// Import the child_process module
const cp = require('child_process');

for (var i = 1; i < 6; i++) {
    var workerProcess = cp.exec('node slave.js ' + i, function (error, stdout, stderr) {
        if (error) {
            console.log(error);
        }

        // Log the stderr output (if any)
        if (stderr) {
            console.log('value of stderr: ' + stderr);
        }
        // Log the stdout output
        console.log('Value of stdout: ' + stdout);
    });
    workerProcess.on('exit', function (code) {
        console.log('child process exited with code ' + code);
    });
}

