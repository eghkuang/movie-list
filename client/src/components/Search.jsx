
//should serve as the space for the spacebar
//spacebar parent = app
//should have prop

import React from 'react';

var Search = ({ handleSearch, handleSubmit }) => (
  <div>
      <input type="text" className="searchBar" onChange={() => handleSearch(event)} placeholder="Search movie here!"/>
      <button type="submit" onClick={() => handleSubmit()}>Search</button>
  </div>
)

export default Search;


{/* <div className="searchBar">
  <input className="form" type="text" onChange={() => typeSearch(event)}/>
  <button className="submitButton" onClick={() => submitSearch()}>
    <span className="glyphicon glyphicon-search"></span>
  </button>
</div> */}