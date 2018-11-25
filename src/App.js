import React from "react";

//importing the server/back-end for our application
import * as BooksAPI from "./util/BooksAPI";

//importing component for routing to conviently handle url and page manipulations
import { Route } from "react-router-dom";
import "./App.css";

//importing various components that makes-ups the complete application
import SearchPage from "./components/SearchPage";
import BookInShelf from "./components/BookInShelf";

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: [],
    query: ""
  };

  //all the asynchronous calls like fetch etc are made in this component so that it does not affect other functionality of the application
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      //since I have used books as a state, in order to update/modify the state, here I am using setState
      this.setState({books});
    });
  }

  //below method is used to move the books from one shelf (category) to another
  //refers to main page only
  changeShelf = (book, shelf) => {

    //when the user changes the book shelf (category) from one shelf to another, the book must also move
    //the state that mentions which shelf (category) the book is in must also be changed
    book.shelf = shelf;

    //since I have used books[] as a state, in order to update/modify the state, here I am using setState
    this.setState(state => ({
      //functionality like filter() method this used to select the books highlighted
      //functionality like concat() method is used to add all the filtered books in the array of books together
      books: state.books
        .filter(b => b.id !== book.id)
        .concat([book])
    }));

    //BooksAPI behaves as the server
    //it will be updated with new book instance's shelf (category)
    BooksAPI.update(book, shelf);
  };


  //below method is used to move the books to the respective shelf (category) to another
  //refers to search page only
  selectShelf = (book, shelf) => {

    //when the user changes the book shelf (category) from one shelf to another, the book must also move
    //the state that mentions which shelf (category) the book is in must also be changed
    book.shelf = shelf;

    //since I have used books[] as a state, in order to update/modify the state, here I am using setState
    this.setState(state => ({
      //functionality like filter() method this used to select the books highlighted
      //functionality like concat() method is used to add all the filtered books in the array of books together
      books: state.books
        .filter(b => b.id !== book.id)
        .concat([book])
    }));

    //since I have used searchedBooks[] as a state, in order to update/modify the state, here I am using setState
    this.setState(state => ({
      //functionality like filter() method this used to select the books highlighted
      //functionality like concat() method is used to add all the filtered books in the array of books together
      searchedBooks: state.searchedBooks
        .filter(b => b.id !== book.id)
        .concat([book])
    }));

   //BooksAPI behaves as the server
    //it will be updated with new book instance's shelf (category)
    BooksAPI.update(book, shelf)
      .then(data => {});
  };


  //below method is used to handle change in the input text field on the /search location
  //functionality for any book already added in the shelf (category on main page), is also handeled in this function
  handleSearch = query => {
    //to see if the input text field has any value, then response accordingly
    if (query) {
      //since I have used query as a state, in order to update/modify the state, here I am using setState
      this.setState({
        query: query
      });

      //since BooksAPI works as a back-end server for the application, based on the query we search on the server
      BooksAPI.search(query)
        .then(response => {
          //the response attribute holds the data that has been fetched from the BooksAPI search based on the query field
          let searchedBooks = [];

          if (response.length) {

            //funnctionality like map() is used to map through each instance in the response attribute
            searchedBooks = response.map(searchedBook => {

              //we look for the books returned in the response attribute with id that matches woth the ids of the books already in the shelf (category on the main page)
              //if so, we returns per instance of books with the particular shelf (category) they belongs to
              //functionality like filter() is used to filter therough the array of books returned by response attribute based on the id
              const matchedBook = this.state.books.find(
                libraryBook => libraryBook.id === searchedBook.id
              );
              if (matchedBook) {
                return matchedBook;
              } else {
                return searchedBook;
              }
            });
          }

          //since I have used searchedBooks[] as a state, in order to update/modify the state, here I am using setState
          this.setState({searchedBooks});
        })
        .catch((e) => {
          //since I have used searchedBooks[] as a state, in order to update/modify the state, here I am using setState
          this.setState({
            searchedBooks: []
          });
        });


      //to see if the input text field does not have any value, then response accordingly
    } else {
      //since I have used searchedBooks[] as a state, in order to update/modify the state, here I am using setState
      this.setState({
        searchedBooks: []
      });
    }
  };


  //below method is used to make sure that in case the query is null, then the /search page changes accordingly
  //if query is null, /search has no books to display
  clearQuery = () => {
    this.setState({
      query: ""
    });

    //calls handleSearch() based on the query
    this.handleSearch();
  };


  //below function is used to compile all functionalities and components of the application
  render() {
    return (
      <div className="app">
        <Route

          //specifies to main page, which contains all the three shelves (categories)
          exact path="/"
          render={() => (
            <BookInShelf books={this.state.books} changeShelf={this.changeShelf} />
          )}
        />


        <Route

          //specifies to search page, which contains the input text field to search for books per interest
          path="/search"
          render={() => (
            <SearchPage

              //all methods to make sure the application works as per the requirements are called here with states
              selectShelf={this.selectShelf}
              books={this.state.searchedBooks}
              handleSearch={evt => this.handleSearch(evt.target.value)}
              query={this.state.query}
              clearQuery={this.clearQuery}
            />
          )}
        />

      </div>
    );
  }
}

export default BooksApp;