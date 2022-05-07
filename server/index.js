const express = require('express');
const app = express();
const PORT = 4000 || process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({extended:true}));


var db = require('./db');


app.use('/', express.static('client/dist'));

app.get('/allMovies', (request, response)=> {
  console.log('hit route')
  db.query('SELECT * FROM movie;', (err, results) => {
    console.log('requestbody:', request.body);
    if (err) {
      throw(err);
    } else {
      response.send(results);
    }
  })
})

app.post('/addMovie', (request, response) => {
  let {title, watched} = request.body;
  console.log('THE title', title);
  console.log('the watch', watched);
  db.query('INSERT INTO movie (title, watched) VALUES (?, ?)', [title, watched], (err, results) => {
    if (err) {
      throw(err);
    } else {
      response.send(results);
    }
  })
  // response.send('no entry');
})

//{watched === 'Watched' ? 'Watched' : 'Watch'}

app.put('/watchStatus', (request, response) => {
  let {id, title, watched} = request.body;
  console.log('body', request.body);
  db.query('UPDATE movie SET watched = ? WHERE title = ?', [watched, title], (err, results) => {
    console.log('watched', watched);
    console.log('title', title);
    if (err) {
      throw(err);
    } else {
      response.send(results)
    }
  });
})

// `UPDATE movies SET watched = !watched WHERE id = ${movie.ID}`
// UPDATE table SET status = !status where id = ID passed in

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

//modify data id DB using put request
  //set another axios.get request for updated data in .then to fetch the updated data

//update DOM with modified data/toggled version (state)