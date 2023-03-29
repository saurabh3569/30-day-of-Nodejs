const mysql = require('mysql')

const connect = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "newdb"
})

const read_R = 'SELECT * FROM details';
//establishing connection
connect.getConnection(function (err, connection) {
    //retrieving a record from details
    connection.query(read_R, function (err, data) {
        if (err) throw err;
        else {
            console.log(data);
        }
    })
    //releasing connection
    connection.release();
})