require('dotenv').config();
var mysql = require('mysql');

var dbConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: '',
  database: 'checkout'
});

dbConnection.connect((err) => {
  if (err) {
    console.log('error:', err);
  } else {
    console.log(`Connected to the database`)
  }
});

module.exports = dbConnection;