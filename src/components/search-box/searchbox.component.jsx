import React, { Component } from 'react'
import './search-box.styles.css';

const SearchBox = ( {className, placeholder, onChangeHandler} ) => (
    <input 
          //string interpolation
          className={`search-box ${className}`} 
          type='search' 
          placeholder={placeholder}
          onChange={onChangeHandler}/>
)
  
export default SearchBox;

// export default class SearchBox extends Component {
//   render() {
//     return (
//       <input 
//           //string interpolation
//           className={`search-box ${this.props.className}`} 
//           type='search' 
//           placeholder={this.props.placeholder}
//           onChange={this.props.onChangeHandler}/>

//     )
//   }
// }
