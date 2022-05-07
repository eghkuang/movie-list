var mysql = require('mysql2');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'movieList'
});

connection.connect();

module.exports = connection;






//no mysql2 package. need to add somehow ??