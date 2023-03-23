const express = require('express')

const app = express()

app.get('/', function (req, res) {
    res.send('Simple Example of routes!');
})

app.get('/login', function (req, res) {     //http://localhost:5000/login?password=123&&email=sam@gmail.com (URL example)
    const email = req.query.email;
    const password = req.query.password;
    console.log(email + ' ' + password);
    res.send('login module');
})

app.listen(5000, function (req, res) {
    console.log('server started');
})