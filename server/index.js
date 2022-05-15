var router = require('./routes.js');
var db = require('./db');
const express = require('express');

const app = express();
const PORT = 4500 || process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api', router);

app.use('/', express.static('client/dist'));


// app.use('/routes', router);
// (request, response)=> {
//   console.log('hit route')
//   db.query('SELECT * FROM movie;', (err, results) => {
//     console.log('requestbody:', request.body);
//     if (err) {
//       throw(err);
//     } else {
//       response.send(results);
//     }
//   })
// })



// (request, response) => {
//   let {title, watched} = request.body;
//   console.log('THE title', title);
//   console.log('the watch', watched);
//   db.query('INSERT INTO movie (title, watched) VALUES (?, ?)', [title, watched], (err, results) => {
//     if (err) {
//       throw(err);
//     } else {
//       response.send(results);
//     }
//   })
//   // response.send('no entry');
// })

//{watched === 'Watched' ? 'Watched' : 'Watch'}



// (request, response) => {
//   let {id, title, watched} = request.body;
//   console.log('body', request.body);
//   db.query('UPDATE movie SET watched = ? WHERE title = ?', [watched, title], (err, results) => {
//     console.log('watched', watched);
//     console.log('title', title);
//     if (err) {
//       throw(err);
//     } else {
//       response.send(results)
//     }
//   });
// })

// `UPDATE movies SET watched = !watched WHERE id = ${movie.ID}`
// UPDATE table SET status = !status where id = ID passed in

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

//modify data id DB using put request
  //set another axios.get request for updated data in .then to fetch the updated data

//update DOM with modified data/toggled version (state)