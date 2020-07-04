import React, { useContext, useEffect } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import Pictures from "./Pictures";
import Loader from "./Loader";

const ItemHolder = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(AnimalContext);
  
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Pictures images={images} />}
    </div>
  );
};

export default ItemHolder;