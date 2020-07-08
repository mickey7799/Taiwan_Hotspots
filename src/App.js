import React from "react";
import AnimalContextProvider from "./contexts/AnimalContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Item from "./components/Item";
import Header from "./components/Header";
import styled from "styled-components";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

const Container = styled.div`
    max-width: 1400px;
    margin: auto;
    context: center;
`;

function App() {
  var handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  return (
    <AnimalContextProvider>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Container>
          <Route
           render={props => (
             <Header
               handleSubmit={handleSubmit}
               history={props.history}
             />
           )}
           />
           <Switch>
             <Route
               exact 
               path="/"
               render={()=> <Redirect to="/quokka"/>}
             />
              <Route 
               path="/quokka"
               render={()=> <Item searchTerm="quokka"/>}
             />
             <Route 
               path="/koala"
               render={()=> <Item searchTerm="koala"/>}
             />
             <Route 
               path="/dingo"
               render={()=> <Item searchTerm="dingo"/>}
             />
             <Route 
               path="/kangaroo"
               render={()=> <Item searchTerm="kangaroo"/>}
             />
             {/* <Route
               path="/search/:searchInput"
               render={props => (
                 <Search searchTerm={props.match.params.searchInput} />
               )}
             /> */}
             <Route component={NotFound} />
           </Switch>
        </Container>

      </HashRouter>
    
    </AnimalContextProvider>
  );
}

export default App;
