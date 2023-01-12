import { Component } from "react";
import "./search-box.styles.css";

//-----------------------------------------------------------

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`} //dize içinde biraz daha JavaScript kullanacam
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler} // onChange ,girdimizde her değişiklik olduğunda çalışan bir geri aramadır.
      />
    );
  }
}

//-----------------------------------------------------------

export default SearchBox;

//-----------------------------------------------------------
