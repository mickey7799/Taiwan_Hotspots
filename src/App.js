import React from "react";
import AnimalContextProvider from "./contexts/AnimalContext";
import Item from "./components/Item";


function App() {
  return (
    <AnimalContextProvider>
      <Item searchTerm="puppy" />
    
    </AnimalContextProvider>
  );
}

export default App;
