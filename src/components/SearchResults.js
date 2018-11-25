//this component is associated with the book instance that apperas on the /search page, if the query is valid
import React from "react";

//importing component to make sure the functionality associated with the Book componenet of the application works fine
import Book from "./Book";

function SearchResults(props) {

  //initiating the books state as a variable for cleaner code
  let resultedBooks = props.books;

  return (

    //below is the code from the default App.js file
    <div className="search-books-results">

      <ol className="books-grid">
        {
        //below code looks for any value inside the response fetched from the BooksAPI
        //if response has data, we will start sorting the data
        //looking for cover, title, author(s) etc
        resultedBooks.length > 0 && resultedBooks

        //functionality like filter() method this used to select the books highlighted
        //functionality like map() method is used to add all the filtered books in a new array
            .filter(book => book.imageLinks !== undefined)
            .map(book => (
              <li key={book.id}>
                <Book
                  cover={book.imageLinks.thumbnail}
                  title={book.title}
                  authors={book.authors}
                  bookId={book.id}
                  book={book}
                  changeShelf={props.changeShelf}
                  shelf={book.shelf}
                />
              </li>
            ))
        }
      </ol>
    </div>
  );
}

export default SearchResults;