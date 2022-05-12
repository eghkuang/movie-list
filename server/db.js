var mysql = require('mysql2');
// const model = require('./model.js');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'movieList'
});

connection.connect();

module.exports = connection;


