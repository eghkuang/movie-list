import React from 'react';
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import axios from 'axios'

// const MOVIES = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
//   {title: 'The Room'},
// ];

//-------------- using class ------------------
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedMovie: '',
      movies: [],
      addedMovie: '',
      visibleMovies: [],
      watched: '',
      button: true
      // watchedMovies: [],
      // unwatchedMovies: []
    }


    this.getMovies = this.getMovies.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleWatchClick = this.handleWatchClick.bind(this);
    // this.filterWatch = this.filterWatch.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }

    componentDidMount() {
      // this.setState({movies: MOVIES, visibleMovies: MOVIES})
      // this.setState({movies: , visibleMovies: })
      this.getMovies();
    }

    getMovies() {
      axios.get('/api/allMovies')
        .then((response) => {
          console.log('response data', response.data);
          this.setState({movies: response.data, visibleMovies: response.data})
        });
    }

    // -----search-------

    handleSearch(event) {
      this.setState({ searchedMovie: event.target.value });
    }


    handleSubmit(event) {
      this.filterList(event);
    }

    filterList() {
      var filteredList = [];
      var {movies, searchedMovie} = this.state
      searchedMovie = searchedMovie.toLowerCase();
      movies.forEach((movie) => {
        var title = movie.title.toLowerCase();
        if (title.includes(searchedMovie)) {
          filteredList.push(movie);
        }
      })
      this.setState({visibleMovies: filteredList})
    }


    // -----addMovie-------
    // Add an input field for users to add movies.
    // Display only user added movies, not the hardcoded data.

    handleText(event) {
      this.setState({ addedMovie: event.target.value });
    }

    handleAdd(event) {
      axios.post('/api/addMovie', {
        title: this.state.addedMovie,
        watched: 'Not Watched'
      })
        .then((response) => {
          // console.log('MORE response data', response.data);
          // console.log('MORE addedMovie', this.state.addedMovie);
          // console.log('MORE movie', this.state.movies);

          var adding = {title: this.state.addedMovie, watched: 0};
          // console.log('maybe?', this.state.movies.includes(this.state.addedMovie))
          if (this.state.movies.includes(this.state.addedMovie)) {
            return;
          } else {
            this.setState({
              visibleMovies: [...this.state.visibleMovies, adding],
              movies: [...this.state.movies, adding]
              //can you still reach state even though we move this data to DB/index?
            })
          }
      });
    }

    //-------watched toggle property---------
    //Add a button to each list item that allows the user to toggle a 'watched' property.
    handleWatchClick(title, watched) {
      // this.setState({this.state.watched ? 'Watched' : 'Watch'});
      console.log('title', title);
      var watchedText = watched === 'Watched' ? 'Watch' : 'Watched';
      axios.put('/api/watchStatus', {title: title, watched: watchedText})
        .then((response) => {
          console.log('here')
          this.state.visibleMovies.forEach((movie, index) => {
            if (movie.title === title) {
              movie.watched = watchedText;
              this.state.visibleMovies.splice(index, 1, movie);
              this.setState({visibleMovies: this.state.visibleMovies});
            }
          })
        })
    }

    toggleButton() {
      console.log('event')
      this.setState({button: !this.state.button});
    }

    //-------watchList--------
    handleWatchList(event) {
      this.filterWatched();
    }

    filterWatched() {
      var watchList = [];
      var {movies, searchedMovie} = this.state
      movies.forEach((movie) => {
        var watched = movie.watched;
        if (watched.includes('Watched')) {
          watchList.push(movie);
        }
      })
      this.setState({visibleMovies: watchList})
    }



    render () {
      const renderList = () => (
        this.state.visibleMovies.map(({ title, watched }) => (
          <li>{title}
            <button onClick={() => this.handleWatchClick(title, watched)}>{watched === 'Watched' ? 'Watched' : 'Watch'}</button>
          </li>
          ))
        )
      return (
      <div>
        <h2>Movie List</h2>
        <ul>
          <div>
            <AddMovie handleText={this.handleText} handleAdd={this.handleAdd}/>
            <Search handleSearch={this.handleSearch} handleSubmit={this.handleSubmit}/>
            {/* <WatchedList handleWatch={this.handleWatch}/> */}
            <button onClick={this.handleWatchList}>Watched</button>
            <button>To Watch</button>
          </div>
        </ul>

        <ul>
          <div className="movieList">
            {renderList()}
          </div>
        </ul>
        <button onClick={this.toggleButton}>{this.state.button ? 'on' : 'off'}</button>
      </div>
    )
  }
}


export default App;