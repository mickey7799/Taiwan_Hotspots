import React from "react";
import ItemHolder from "./ItemHolder";

const Search = ({ searchTerm }) => {
  return (
    <div>
      <h2>{searchTerm} Images</h2>
      <ItemHolder searchTerm={searchTerm} />
    </div>
  );
};

export default Search;