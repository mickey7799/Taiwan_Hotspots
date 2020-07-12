import React, { createContext, useState, useCallback } from "react";
import axios from "axios";
//import { apiKey } from "../components/config";
export const PictureContext = createContext();
const apiKey = process.env.REACT_APP_AUTH_TOKEN;

const PictureContextProvider = props => {
  const [images, setPictures] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const runSearch = useCallback((animal) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${animal}&per_page=20&format=json&nojsoncallback=1`)
    .then(res => {
        setPictures(res.data.photos.photo);
        setLoading(false);

      }).catch((err) => {
        console.log('error')
      })
  }, []);
  
  return (
    <PictureContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PictureContext.Provider>
  );
};

export default PictureContextProvider;