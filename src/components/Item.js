import React from "react";
import ItemHolder from "./ItemHolder";

const Item = ({ searchTerm }) => {
  return (
    <div>
      <h2>{searchTerm} Pictures</h2>
      <ItemHolder searchTerm={searchTerm} />
    </div>
  );
};

export default Item;