import React from "react";
import ItemHolder from "./ItemHolder";

const Item = ({ searchTerm }) => {
  return (
    <div>
      <h2>{searchTerm} pictures</h2>
      <ItemHolder searchTerm={searchTerm} />
    </div>
  );
};

export default Item;