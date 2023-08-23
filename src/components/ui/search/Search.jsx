import React from "react";
import "./Search.scss"
const Search = (props) => {

  return (
    <div className="searchBox">
      <input className="inputBox" type='search' placeholder="Enter product Name" onChange={props.SearchValue} />
    </div>
  )

}

export default Search;