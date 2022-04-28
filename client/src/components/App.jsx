import React from 'react';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App = (props) => (
  <div>
    <div>Hello World!</div>
      <ul>mean gorls</ul>
      <ul>Hackers</ul>
      <ul>The Grey</ul>
      <ul>Sunshine</ul>
      <ul>Ex Machina</ul>
  </div>
);

//-------------- using class ------------------

class App = ( props ) => {
  constructor(props) {
    super(props);

    this.state = {
      searchedMovie: '';
      movieList: movie;
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSearch(event) {
    this.setState({ 'searchedMovie': event.target.value });
  }


  handleSubmit(event) {
    this.setState({
      movieList: //should be a list of movies with the searchedMovie keyword. need to make movieList
    })
  }

  render () {
    return (
      <div>
        <nav className="searchBar">
          <div><Search handleSearch={this.handleChange} handleSubmit={this.handleSubmit}/></div>
        </nav>
      </div>
    )
  }
}





export default App;