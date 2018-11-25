//this component is used to manage the instances as per any change in the input text field on the /search url
import React from "react";

//importing component for routing to conviently handle url and page manipulations
import { Link } from "react-router-dom";

function SearchInput(props) {
  return (

    //below is the code from the default App.js file
    <div className="search-books-bar">

      {/* adding a link tag instead of button or anchor tag, to make sure routing works fine */}
      <Link className="close-search" to="/">
        Back
      </Link>

      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}

export default SearchInput;