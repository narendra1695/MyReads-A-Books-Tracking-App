//this component is used to make sure that the book present in every shelf (category) on the page has all the data needed to display
import React from "react";

//importing component to make sure the functionality associated with the Book componenet of the application works fine
import Book from "./Book";

function Shelf(props) {

  //below is the code from the default App.js file
  return (
    <div className="bookshelf">

      {/*props.name is used to fetch the title for the shelf (category) */}
      <h2 className="bookshelf-title">{props.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">

        {/* functionality like filter() method this used to select the books highlighted */}
        {/* functionality like map() method is used to add all the filtered books in a new array */}
          {props.shelfBooks
            .filter(book => book.shelf === props.value)
            .map(book => (
              <li key={book.id}>
                <Book
                  cover={book.imageLinks.thumbnail}
                  title={book.title}
                  authors={book.authors}
                  shelf={book.shelf}
                  bookId={book.id}
                  book={book}
                  changeShelf={props.changeShelf}
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;