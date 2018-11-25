//this component is used to manage the book instance irrespective of the location of where the book is present
//it can be on the (/) - main pgae
//it can be on the (/search) search pgae
import React from "react";

//importing component to make sure the functionality associated with the Book componenet of the application works fine
import ShelfChangeButton from "./ShelfChangeButton";

function Book(props) {
  return (

    //below is the code from the default App.js file
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          //props.cover is used to fetch the thumbnail for the book cover from the BooksAPI
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${props.cover})`
          }}
        />


        {/* button by the help of which user can change the book from one shelf (category) to another
            also, user can add the book from the search page to the shelf (category) (s)he desires to */}
        <ShelfChangeButton
          changeShelf={props.changeShelf}
          bookId={props.bookId}
          book={props.book}
          currentShelf={props.shelf}
        />
      </div>

      {/*props.title is used to fetch the title for the book(s) from the BooksAPI*/}
      <div className="book-title">{props.title}</div>

      {/*props.author(s) is used to fetch the author(s) for the book(s) from the BooksAPI*/}
      <div className="book-authors">{props.authors}</div>
    </div>
  );
}

export default Book;