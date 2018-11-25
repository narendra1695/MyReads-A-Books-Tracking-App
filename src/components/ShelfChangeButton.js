//this component is used to make sure that suer can change the book instance from one shelf (category) to another with ease
import React, { Component } from "react";

class ShelfChangeButton extends Component {

  handleChange = evt => {

    //changeShelf() method is used to move the book(s) from one shelf (category) to another
    //since, changeShelf() method is defined in the App.js file, here it has been used as a prop
    this.props.changeShelf(this.props.book, evt.target.value);
  };

  render() {

    //below is the code from the default App.js file
    return (
      <div className="book-shelf-changer">
        <select
          onChange={this.handleChange}

          //this makes sure that the book already added in any shelf has the same value in bothof its instances
          //on the main page where the three shelves (categories) are
          //and, also on the search pgae
          defaultValue={this.props.currentShelf}
        >
          <option value="move" disabled>
            Move the book to...
          </option>

          {/* change the order of shelf name, this looks more convenient  */}
          <option value="none">None</option>
          <option value="wantToRead">Want to Read</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="read">Read</option>
        </select>
      </div>
    );
  }
}

export default ShelfChangeButton;