const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'newdb'
});

// connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL server');
});

// close the connection
connection.end();


