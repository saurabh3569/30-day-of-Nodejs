const express = require('express')
const app = express()

app.get('/', function (req, res) {   //Simple Example of routes!
    res.send('home page')
})

app.get('/login', function (req, res) { //This is demo route for login
    res.send('login page')
})

app.get('/users', function (req, res) {  //This is demo route for user list
    res.send('users page')
})

app.get('/users/id', function (req, res) {  //This is demo route for user profile
    res.send('user profile page')
})

app.listen(5000, function (req, res) {
    console.log('started');
})
