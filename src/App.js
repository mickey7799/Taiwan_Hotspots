import React from "react";
import AnimalContextProvider from "./context/AnimalContextProvider";
import Item from "./components/Item";


function App() {
  return (
    <AnimalContextProvider>
      <Item/>
    
    </AnimalContextProvider>
  );
}

export default App;
