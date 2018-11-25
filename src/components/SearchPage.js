//this component is used to associates all the necesasry data and functionalities with the search page at /search
import React, { Component } from "react";

//importing component to make sure the functionality associated with the Book componenet of the application works fine
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

class SearchPage extends Component {

  //all the asynchronous calls like fetch etc are made in this component so that it does not affect other functionality of the application
  componentDidMount() {

    //clearQuery() methd is used to handle if the query is invalid
    //also, it calls the handleSearch() method to fetch data from the BooksAPI
    this.props.clearQuery();
  }

  //below function is used to compile all functionalities and components of the application
  render() {
    return (

      //below is the code from the default App.js file
      <div className="search-books">

        {/* this component is used to manage the instances as per any change in the input text field on the /search url  */}
        <SearchInput
          handleChange={this.props.handleSearch}
          query={this.props.query}
        />

        {/* this component is used to fetch and display the data related to the book(s) for the search page */}
        <SearchResults
          books={this.props.books}
          changeShelf={this.props.selectShelf}
        />
      </div>
    );
  }
}

export default SearchPage;