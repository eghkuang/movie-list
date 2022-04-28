import React from 'react';

const MOVIES = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

//-------------- using class ------------------
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedMovie: '',
      movies: [],
      visibleMovies: []
    }


    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({movies: MOVIES, visibleMovies: MOVIES})
  }

  handleSearch(event) {
    this.setState({ 'searchedMovie': event.target.value });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.filterList()
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


  render () {
    const renderList = () => (
      this.state.visibleMovies.map(({ title }) => (
          <li>{title}</li>
        ))
    )
    return (
      <div>
        <h2>Movie List</h2>
          <input type="text" className="searchBar" onChange={this.handleSearch} placeholder="Search movie here!"/>
          <button type="submit" onClick={(event) => {this.handleSubmit(event)}}>Submit</button>
        <ul>
          {renderList()}
        </ul>
      </div>
    )
  }
}


export default App;