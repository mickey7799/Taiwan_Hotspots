import React from "react";
import AnimalContextProvider from "./contexts/AnimalContext";
import Item from "./components/Item";
import Header from "./components/Header"

function App() {
  return (
    <AnimalContextProvider>
      <Header/>
      <Item searchTerm="puppy" />
    
    </AnimalContextProvider>
  );
}

export default App;
