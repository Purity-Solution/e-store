import React from "react";
import "./search.scss";
const Search = () => {
  return (
    <div>
      <div className="searchBar">
        <form className="formSearch">
          <input
            type="search"
            placeholder="Search..."
            className="searchbar-field form-control"
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
