const model = require('./model.js');

const controller = {
  movie: {
    get: function (req, res) {
      model.movie.getAll((err, results)=>{
        if (err) {
          res.sendStatus(404);
        } else {
          res.status(200).send(results);
          //res.jaon(results);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('reqBody', req.body);
      model.movie.create(req.body, (err)=>{
        if (err) {
          console.log('err', err);
          res.sendStatus(404);
        } else {
          res.sendStatus(201);
        }
      });
    }, // a function which handles posting a message to the database

    put: function (req, res) {
      model.movie.updateStatus(req.body, (err) => {
        if (err) {
          res.sendStatus(404);
        } else {
          res.sendStatus(202);
        }
      });
    }
  }
};

module.exports = controller;