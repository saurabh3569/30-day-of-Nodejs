const mysql = require('mysql')

const connect = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "newdb"
})

const update_R = 'UPDATE details SET age = ? WHERE name=?';
//establishing connection
connect.getConnection(function (err, connection) {
    //Updating a record from details
    connection.query(update_R,[25, 'raji'], function (err, res) {
        if (err) throw err
        else {
            console.log('Updated the age of raji!');
        }
    })
    //releasing connection
    connection.release();
})