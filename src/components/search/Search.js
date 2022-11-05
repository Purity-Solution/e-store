import React from "react";
import "./search.scss";

const Search = () => {
  return (
    <div className="searchBar">
      <form className="formSearch" onKeyDown={(e) => e.stopPropagation()}>
        <input
          type="search"
          placeholder="Search..."
          className="searchbar-field form-control"
        />
      </form>
    </div>
  );
};

export default Search;
