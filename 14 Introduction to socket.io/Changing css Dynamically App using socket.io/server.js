const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
//Handling the default route
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
//Handling the route for admin
app.get('/admin', function (req, res) {
    res.sendFile(__dirname + '/admin.html');
})
//Code for sockets
io.on('connection', function (socket) {

    socket.on('new', function (data) {   // taking quote from admin.html
        console.log('Added')
        io.sockets.emit('next', { data: data })   // sending quote to index.html
    })
});

//server listening at 127.0.0.1:5000
server.listen(5000)
console.log("Server listening at: 5000");