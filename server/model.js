const db = require('./db.js');


const model = {
  movie: {
    getAll: function (callback) {
      db.query('SELECT * FROM movie', function(err, data) {
        callback(err, data);
      });
    }, // a function which produces all the messages

    create: function (body, callback) {
      let {title, watched} = body;
      console.log('title:', title);
      console.log('watched:', watched);
      db.query('INSERT INTO movie (title, watched) VALUES (?, ?)', [title, watched], function(err, fields) {
        callback(err, fields);
      });
    }, // a function which can be used to insert a message into the database

    updateStatus: function(body, callback) {
      let {id, title, watched} = body;
      db.query('UPDATE movie SET watched = ? WHERE title = ?', [watched, title], function(err, results) {
        callback(err, results);
      });
    }
  }

};


module.exports = model;