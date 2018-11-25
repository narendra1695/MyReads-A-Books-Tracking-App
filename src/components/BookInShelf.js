//this component is used to manage the book instance irrespective of the location of where the book is present
//it can be on the (/) - main pgae
//it can be on the (/search) search pgae
import React from "react";

//importing component to make sure the functionality associated with the Book componenet of the application works fine
import Header from "./Header";
import Shelf from "./Shelf";
import AddBook from "./AddBook";

function BookInShelf(props) {
  return (

    //below is the code from the default App.js file
    <div className="list-books">

      {/* this component as the name suggests, is used to add the heading of the application */}
      <Header />
      <div className="list-books-content">
        <div>

          {/* this components assiciates wiht the dara available in each shelf (category) for the books like book title,
              author(s), cover etc */}
          <Shelf
            shelfBooks={props.books}
            name={"Currently Reading"}
            value={"currentlyReading"}
            changeShelf={props.changeShelf}
          />

           {/* this components assiciates wiht the dara available in each shelf (category) for the books like book title,
              author(s), cover etc */}
          <Shelf
            shelfBooks={props.books}
            name={"want To Read"}
            value={"wantToRead"}
            changeShelf={props.changeShelf}
          />

          {/* this components assiciates wiht the dara available in each shelf (category) for the books like book title,
              author(s), cover etc */}
          <Shelf
            shelfBooks={props.books}
            name={"Read"}
            value={"read"}
            changeShelf={props.changeShelf}
          />
        </div>
      </div>

      {/* this component is used to add the /search pgae link */}
      <AddBook />
    </div>
  );
}

export default BookInShelf;