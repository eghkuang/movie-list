import React from 'react';
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'

const MOVIES = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: 'The Room'},
];

//-------------- using class ------------------
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedMovie: '',
      movies: [],
      addedMovie: '',
      visibleMovies: []
    }


    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.setState({movies: MOVIES, visibleMovies: MOVIES})
  }

  // -----search-------

  handleSearch(event) {
    this.setState({ searchedMovie: event.target.value });
    console.log(event.target.value)
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
    console.log(event.target.value);
  }

  handleAdd(event) {
    var adding = {title: this.state.addedMovie, watched: false};
    this.setState({
      visibleMovies: [adding, ...this.state.visibleMovies],
      movies: [adding, ...this.state.movies]

    })
  }


  render () {
    const renderList = () => (
      this.state.visibleMovies.map(({ title }) => (
          <li>{title}</li>
        ))
    )
    return (
      <div>
        <h2>Movie List</h2>
        <ul>
          <div>
            <AddMovie handleText={this.handleText} handleAdd={this.handleAdd}/>
          </div>
        </ul>

        <ul>
          <div>
            <Search handleSearch={this.handleSearch} handleSubmit={this.handleSubmit}/>
          </div>
        </ul>

        <ul>
          <div className="movieList">
            {renderList()}
          </div>
        </ul>
      </div>
    )
  }
}


export default App;