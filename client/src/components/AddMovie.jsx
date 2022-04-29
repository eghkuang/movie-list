//should serve as space for add movie bar

import React from 'react';

var AddMovie = ({ handleText, handleAdd }) => (
  <div>
    <input type="text" className="addBar" onChange={() => handleText(event)} placeholder="Add a movie to the list!"/>
    <button type="submit" onClick={() => {handleAdd()}}>Add</button>
  </div>
)

export default AddMovie;