import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { apiKey } from "../components/config";
export const AnimalContext = createContext();

const AnimalContextProvider = props => {
  const [images, setPictures] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const runSearch = useCallback((animal) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${animal}&per_page=28&format=json&nojsoncallback=1`)
    .then(res => {
        // console.log(res.data.photos.photo);
        setPictures(res.data.photos.photo);
        setLoading(false);

      }).catch((err) => {
        console.log('error')
      })
  }, []);

  // useEffect(() => {
  //   runSearch('quokka');
  // }, [runSearch])
  
  return (
    <AnimalContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </AnimalContext.Provider>
  );
};

export default AnimalContextProvider;