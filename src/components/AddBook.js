//this component is used to go to the /search pgae, in order to add new book(s) in the shelves (categories) on the main pgae
import React from "react";

//importing component for routing to conviently handle url and page manipulations
import { Link } from "react-router-dom";

function AddBook() {
  return (
    <div className="open-search">

    	{/* adding a link tag instead of button or anchor tag, to make sure routing works fine */}
      <Link to="/search">Add a book</Link>
    </div>
  );
}

export default AddBook;