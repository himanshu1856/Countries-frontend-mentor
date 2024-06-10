import React from "react";

const SearchBar = ({queryHandler,query}) => {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search for a country..."
      value={query} 
      onChange={(e)=>queryHandler(e.target.value)}/>
    </div>
  );
};

export default SearchBar;
