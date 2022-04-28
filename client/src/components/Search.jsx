
//should serve as the space for the spacebar
//spacebar parent = app
//should have prop

import React from 'react';

var Search = (props) => (
  <div>
    <form>
        <input className="searchBar" onChange={(event) => {props.handleSearch(event)}} placeholder="Search movie here!"></input>
        <input className="searchMovie" type="submit" onClick={(event) => {props.submitSearch(event)}} value="Search movie here!"></input>
    </form>
  </div>
)

export default Search;


{/* <div className="searchBar">
  <input className="form" type="text" onChange={() => typeSearch(event)}/>
  <button className="submitButton" onClick={() => submitSearch()}>
    <span className="glyphicon glyphicon-search"></span>
  </button>
</div> */}