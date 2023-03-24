var mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'BA;42VpXqQ@i+y{&TDFF',
  database: 'god-shiva'
});

conn.connect(function (err) {
  if (err) {
    console.log("database connection failed..!");
  }

  else {
    console.log("database connection successfull..!");
  }
});

module.exports = conn;
