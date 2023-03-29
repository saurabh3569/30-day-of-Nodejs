const mysql = require('mysql')

const connect = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "newdb"
})

const table = "CREATE TABLE details (id int(15) NOT NULL AUTO_INCREMENT," +
  "name varchar(30) DEFAULT NULL," +
  "age float(15) DEFAULT NULL," +
  "PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=latin1";

//establishing connection
connect.getConnection(function (err, connection) {
  //Creating details table
  connection.query(table, function (err) {
    if (err) throw err
    else {
      console.log('Table created successfully');
    }
  })
  //releasing connection
  connection.release();
})