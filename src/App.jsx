import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Pokedex from "./Pokedex";
import "./App.css"
import Search from "./Search";
import Pokemon from "./Pokemon";

const NavigationBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/pokedex"> Pokédex</Link>
      <Link to="/search">Search</Link>
    </nav>
)};

const App = () => (
  <>
    <BrowserRouter>
      <NavigationBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pokedex" element={<Pokedex />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/pokemon" element={<Pokemon />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </>
);

export default App;