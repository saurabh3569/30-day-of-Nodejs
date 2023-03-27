//Including the required files
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
//Handling the default route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/css-color.html');
});
//Handling the route for admin 
app.get('/admin', function (req, res) {
  res.sendFile(__dirname + '/css-color-admin.html');
})
//Code for sockets
io.on('connection', function (socket) {
  socket.on('admin', function (data) {     // taking color code from css-color-admin.html
    console.log(data);
    console.log('about to broadcast')
    io.sockets.emit('color', { data: data })   // sending color code to css-color.html
  })
});

//server listening at 127.0.0.1:5000
server.listen(5000);
console.log("Listening at 5000");