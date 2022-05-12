var controller = require('./controller.js');
var express = require('express');
var router = express.Router();



//Connect controller methods to their corresponding routes
router.get('/allMovies', controller.movie.get);

router.post('/addMovie', controller.movie.post);

router.put('/watchStatus', controller.movie.put);


module.exports = router;