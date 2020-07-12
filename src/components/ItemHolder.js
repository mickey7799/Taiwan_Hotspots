import React, { useContext, useEffect } from "react";
import { PictureContext } from "../contexts/PictureContext";
import Pictures from "./Pictures";
import Loader from "./Loader";


const ItemHolder = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PictureContext);
  
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div>
      {loading ? <Loader /> : <Pictures images={images} />}
    </div>
  );
};

export default ItemHolder;